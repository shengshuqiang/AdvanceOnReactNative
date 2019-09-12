const RealDOMElements = ['HostComponent', 'HostText'];
let Radius;
let DOMRadius;
let FontSize;
let DOMFontSize;
let RunRecordFontSize;
let DescFontSize;
let FontColor;
let DescFontColor;
let Font;
let DOMFont;
let RunRecordFont;
let DescFont;
let XStep;
let RootXStep;
let YStep;
let InitX;
let InitY;
let DOMXOffset;
let DOMYOffset;
let DOMXStep;
let DOMRootXStep;
let DOMYStep;
let DOMInitX;
let DOMInitY;
let InvalidID;

function init(ratio) {
  if (ratio > 0) {
    Radius = 30 * ratio;
    DOMRadius = 50 * ratio;
    FontSize = 20 * ratio;
    DOMFontSize = 20 * ratio;
    RunRecordFont = 25 * ratio;
    FontColor = 'black';
    Font = FontSize + 'px  Arial';
    DOMFont = DOMFontSize + 'px  Arial';
    RunRecordFont = RunRecordFont + 'px  Arial';
    DescFontColor = 'gray';
    DescFontSize = 10;
    DescFont = DescFontSize + 'px  Arial';
    XStep = 4 * Radius;
    RootXStep = 4 * XStep;
    YStep = 3 * Radius;
    InitX = 5 * Radius;
    InitY = 2 * Radius;
    DOMXOffset = 3 * RootXStep;
    DOMYOffset = 3 * RootXStep;
    DOMXStep = 1.5 * DOMRadius;
    DOMRootXStep = 2 * DOMXStep;
    DOMYStep = 3 * DOMRadius;
    DOMInitX = 3 * DOMRadius;
    DOMInitY = 4 * DOMRadius;
    InvalidID = -1;
  }
}

const HighLightColor = 'purple';
const NodeColor = '#FF0000';
const RealDOMNodeColor = '#32cd32';
const RunRecordNodeColor = 'yellow';
const HighLightRunRecordNodeColor = 'purple';
const NodeAlternateLineColor = 'purple';
const NodeChildLineColor = 'green';
const DOMNodeChildLineColor = 'black';
const NodeSiblingLineColor = 'blue';
const NodeNextEffectLineColor = 'orange';
const LineWidth = 2;

function drawFiberLine(cxt, id, fiberXYObj, alternateIDSet) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    const {x, y} = fiber;
    cxt.lineWidth = LineWidth;
    // alternate line
    if (fiber.alternate !== InvalidID) {
      alternateIDSet.add(id);
      alternateIDSet.add(fiber.alternate);
      const alternateFiber = fiberXYObj[fiber.alternate];
      // console.log('SSU', 'drawFiberLine', {id, x, y}, {id: alternateFiber.id, x: alternateFiber.x, y: alternateFiber.y});
      cxt.strokeStyle = NodeAlternateLineColor;
      if (alternateFiber.x && alternateFiber.y) {
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.bezierCurveTo(x, y - 2 * Radius, alternateFiber.x, alternateFiber.y - 2 * Radius, alternateFiber.x, alternateFiber.y);
        cxt.stroke();
        cxt.beginPath();
        const [middleX, middleY] = [(x + alternateFiber.x) / 2, (y + alternateFiber.y) / 2 - 3 / 2 * Radius];
        const director = x < alternateFiber.x ? -1 : 1;
        cxt.moveTo(middleX + director * Radius / 2, middleY - Radius / 2);
        cxt.lineTo(middleX, middleY);
        cxt.lineTo(middleX + director * Radius / 2, middleY + Radius / 2);
        cxt.stroke();
      } else {
        const [exdX, endY] = [x - 2 * Radius, y - Radius];
        // 虚线
        cxt.setLineDash([ 2 * LineWidth]);
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.bezierCurveTo(x, y - 2 * Radius, exdX, endY - Radius, exdX, endY);
        cxt.stroke();
        // 还原实线
        cxt.setLineDash([]);
      }
    }
    // child line
    if (fiber.child !== InvalidID) {
      const childFiber = fiberXYObj[fiber.child];
      cxt.strokeStyle = NodeChildLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(childFiber.x, childFiber.y);
      cxt.stroke();
    }
    // sibling line
    if (fiber.sibling !== InvalidID) {
      const siblingFiber = fiberXYObj[fiber.sibling];
      cxt.strokeStyle = NodeSiblingLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(siblingFiber.x, siblingFiber.y);
      cxt.stroke();
    }
    // nextEffect
    if (fiber.nextEffect !== InvalidID) {
      const nextEffectFiber = fiberXYObj[fiber.nextEffect];
      cxt.strokeStyle = NodeNextEffectLineColor;
      if (nextEffectFiber.x && nextEffectFiber.y) {
        cxt.beginPath();
        cxt.moveTo(x, y);
        let cp1x = x;
        let cp1y = y;
        let cp2x = nextEffectFiber.x;
        let cp2y = nextEffectFiber.y;
        const deltaX = x - nextEffectFiber.x;
        const deltaY = y - nextEffectFiber.y;
        const offsetX = deltaX === 0 ? 2 * Radius : deltaX / 2;
        const offsetY = deltaY === 0 ? 2 * Radius : deltaY / 2;
        if (deltaX === 0) {
          if (deltaY === 0) {
            cp1x -= offsetX;
            cp1y -= offsetY;
            cp2x += offsetX;
            cp2y += offsetY;
          } else if (deltaY > 0) {
            cp1x -= offsetX;
            cp2x -= offsetX;
          } else {
            cp1x -= offsetX;
            cp2x -= offsetX;
          }
          ;
        } else if (deltaX > 0) {
          if (deltaY === 0) {
            cp1y += offsetY;
            cp2y += offsetY;
          } else if (deltaY > 0) {
            cp1x -= offsetX;
            cp2x += offsetX;
          } else {
            cp1x -= offsetX;
            cp2x += offsetX;
          }
          ;
        } else {
          if (deltaY === 0) {
            cp1y += offsetY;
            cp2y += offsetY;
          } else if (deltaY > 0) {
            cp1x -= offsetX;
            cp2x += offsetX;
          } else {
            cp1x -= offsetX;
            cp2x += offsetX;
          }
          ;
        }
        ;
        cxt.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, nextEffectFiber.x, nextEffectFiber.y);
        cxt.stroke();
        let [middleX, middleY] = [(x + nextEffectFiber.x) / 2, (y + nextEffectFiber.y) / 2];
        if (x === nextEffectFiber.x) {
          middleX -= 3 * offsetX / 4;
        }
        if (y === nextEffectFiber.y) {
          middleY -= 3 * offsetY / 4;
        }
        if (y !== nextEffectFiber.y) {
          const director = y < nextEffectFiber.y ? -1 : 1;
          cxt.moveTo(middleX - Radius / 2, middleY + director * Radius / 2);
          cxt.lineTo(middleX, middleY);
          cxt.lineTo(middleX + Radius / 2, middleY + director * Radius / 2);
          cxt.stroke();
        } else {
          const director = x < nextEffectFiber.x ? -1 : 1;
          cxt.moveTo(middleX + director * Radius / 2, middleY - Radius / 2);
          cxt.lineTo(middleX, middleY);
          cxt.lineTo(middleX + director * Radius / 2, middleY + Radius / 2);
          cxt.stroke();
        }
      } else {
        const [exdX, endY] = [x - 2 * Radius, y - Radius];
        // 虚线
        cxt.setLineDash([2 * LineWidth]);
        cxt.beginPath();
        cxt.moveTo(x, y);
        cxt.bezierCurveTo(x - Radius, y, exdX, endY - Radius, exdX, endY);
        cxt.stroke();
        // 还原实线
        cxt.setLineDash([]);
      }
    }

    drawFiberLine(cxt, fiber.child, fiberXYObj, alternateIDSet);
    drawFiberLine(cxt, fiber.sibling, fiberXYObj, alternateIDSet);
  }
};

function drawFiberNode(cxt, id, fiberXYObj, currentFiberID) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    const {x, y, tag, effectTag, type, nativeTag} = fiber;
    // circle
    if (id === currentFiberID) {
      // highlight currentFiberID
      cxt.fillStyle = HighLightColor;
      cxt.beginPath();
      cxt.arc(x, y, 1.5 * Radius, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
    }
    if (isRealDOMElement(fiber)) {
      cxt.fillStyle = RealDOMNodeColor;
      cxt.beginPath();
      cxt.rect(x - Radius, y - Radius, 2 * Radius, 2 * Radius);
      cxt.closePath();
      cxt.fill();
    } else {
      cxt.fillStyle = NodeColor;
      cxt.beginPath();
      cxt.arc(x, y, Radius, 0, Math.PI * 2, true);
      cxt.closePath();
      cxt.fill();
    }

    // text
    const text = id;
    cxt.fillStyle = FontColor;
    cxt.font = Font;
    cxt.fillText(text, x - cxt.measureText(text).width / 2, y);
    // desc
    cxt.fillStyle = DescFontColor;
    cxt.font = DescFont;
    cxt.fillText(tag, x - cxt.measureText(tag).width / 2, y + 0.7 * FontSize);
    cxt.fillText(type, x - cxt.measureText(type).width / 2, y + 1.4 * FontSize);
    nativeTag && cxt.fillText(nativeTag, x - cxt.measureText(nativeTag).width / 2, y + 2.1 * FontSize);
    effectTag && cxt.fillText(effectTag, x - cxt.measureText(effectTag).width / 2, y + 2.8 * FontSize);

    drawFiberNode(cxt, fiber.child, fiberXYObj, currentFiberID);
    drawFiberNode(cxt, fiber.sibling, fiberXYObj, currentFiberID);
  }
};

function isRealDOMElement(fiber) {
  if (fiber) {
    const {tag} = fiber;
    return RealDOMElements.includes(tag);
  }
  return false;
}

function layoutFiberNode(id, fiberXYObj, x, y) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    fiberXYObj[id].x = x;
    fiberXYObj[id].y = y;

    layoutFiberNode(fiber.child, fiberXYObj, x, y + YStep);
    layoutFiberNode(fiber.sibling, fiberXYObj, x + XStep, y);
  }
};

function getDomNodeXY(domNode, offsetLeafCount) {
  const {index, level} = domNode;
  const x = DOMInitX + (5 * offsetLeafCount + index) * DOMXStep;
  const y = DOMInitY + level * DOMYStep;

  return {x, y};
}

function drawDomNode(cxt, domNode, offsetLeafCount, currentFiberID) {
  if (!domNode) {
    return;
  }
  const {name, id, nativeTag, children, style} = domNode;
  // const styleStr = style ? `(${style.width ? style.width : 'w'}, ${style.height ? style.height : 'h'}) ${style.text ? style.text : ''}` : '';
  const styleStr = JSON.stringify(style);
  const {x, y} = getDomNodeXY(domNode, offsetLeafCount);
  // line
  cxt.strokeStyle = DOMNodeChildLineColor;
  cxt.lineWidth = LineWidth;
  children && children.forEach((childDomNode, childIndex) => {
    if (childDomNode) {
      const {x: xx, y: yy} = getDomNodeXY(childDomNode, offsetLeafCount);
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.lineTo(xx, yy);
      cxt.stroke();
    }
  });


  // console.log('SSU', 'drawDomNode', {x, y, domNode});
  cxt.lineWidth = LineWidth;
  if (currentFiberID === id) {
    cxt.fillStyle = HighLightColor;
    cxt.beginPath();
    cxt.arc(x, y, 1.5 * DOMRadius, 0, Math.PI * 2, true);
    cxt.closePath();
    cxt.fill();
  }
  cxt.fillStyle = RealDOMNodeColor;
  cxt.beginPath();
  cxt.rect(x - DOMRadius, y - DOMRadius, 2 * DOMRadius, 2 * DOMRadius);
  cxt.closePath();
  cxt.fill();

  cxt.fillStyle = FontColor;
  cxt.font = DOMFont;
  const title = `${nativeTag}(${id})`
  cxt.fillText(title, x - cxt.measureText(title).width / 2, y + 0 * DOMFontSize);
  cxt.fillText(name, x - cxt.measureText(name).width / 2, y + 1.0 * DOMFontSize);
  cxt.font = DescFont;
  cxt.fillText(styleStr, x - cxt.measureText(styleStr).width / 2, y + 2 * DOMFontSize);
  children && children.forEach((childDomNode, childIndex) => {
    drawDomNode(cxt, childDomNode, offsetLeafCount, childIndex, currentFiberID);
  });
}

function layoutDomNode(domNode, treeInfo) {
  if (!domNode) {
    return null;
  }
  const layoutDomNode = buildLayoutDomNodeTree(domNode, 0, treeInfo);
  // console.log('SSU', 'buildLayoutDomNodeTree', {layoutDomNode, treeInfo});
  correctLayoutDomNodeTree(layoutDomNode, treeInfo.maxLevel);
  // console.log('SSU', 'correctLayoutDomNodeTree', {layoutDomNode, treeInfo});
  const queue = [];
  queue.push(layoutDomNode);
  let index = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    const {children} = node;
    if (children) {
      children.forEach((childLayoutDomNode, childIndex) => {
        queue.push(childLayoutDomNode);
      });
    } else {
      node.index = index;
      if (node.domNode) {
        node.domNode.index = index;
        node.domNode.level = node.level;
        // console.log('SSU', 'layoutDomNode', node.domNode.nativeTag, {index, level: node.domNode.level, node});
      }
      let parent = node.isMiddleChild ? node.parent : null;
      while (parent) {
        if (parent.domNode) {
          parent.domNode.index = index;
          parent.domNode.level = parent.level;
          // console.log('SSU', 'layoutDomNode', parent.domNode.nativeTag, {index, level: parent.domNode.level, node});
        }
        parent = parent.isMiddleChild ? parent.parent : null;
      }
      index ++;

      if (index > treeInfo.maxIndex) {
        treeInfo.maxIndex = index;
      }
    }
  }
}

function buildLayoutDomNodeTree(domNode, level, treeInfo) {
  if (!domNode) {
    return null;
  }
  const layoutDomNode = {
    domNode,
    parent: null,
    children: null,
    isMiddleChild: false,
    index: 0,
    level,
  };
  if (level > treeInfo.maxLevel) {
    treeInfo.maxLevel = level;
  }
  const {children} = domNode;
  children && children.forEach((childDomNode, childIndex) => {
    const childLayoutDomNode = buildLayoutDomNodeTree(childDomNode, level + 1, treeInfo);
    if (childLayoutDomNode) {
      childLayoutDomNode.parent = layoutDomNode;
      if (layoutDomNode.children) {
        layoutDomNode.children.push(childLayoutDomNode);
      } else {
        layoutDomNode.children = [childLayoutDomNode];
      }
    }
  });
  // console.log('SSU', 'buildLayoutDomNodeTree', domNode.nativeTag, {index: layoutDomNode.index, level});
  return layoutDomNode;
}

function correctLayoutDomNodeTree(layoutDomNode, maxLevel) {
  if (!layoutDomNode) {
    return null;
  }

  const {children, level} = layoutDomNode;
  if (children && children.length) {
    if (children.length % 2 === 0) {
      const midChildLayoutDomNode = {
        domNode: null,
        parent: layoutDomNode,
        children: null,
        isMiddleChild: true,
        index: 0,
        level: level + 1,
      };
      children.splice(children.length / 2, 0, midChildLayoutDomNode);
    }
    children[(children.length - 1) / 2].isMiddleChild = true;

    children.forEach((childLayoutDomNode, childIndex) => {
      correctLayoutDomNodeTree(childLayoutDomNode, maxLevel);
    });
  } else {
    if (level < maxLevel) {
      const midChildLayoutDomNode = {
        domNode: null,
        parent: layoutDomNode,
        children: null,
        isMiddleChild: true,
        index: 0,
        level: level + 1,
      };
      layoutDomNode.children = [midChildLayoutDomNode];

      correctLayoutDomNodeTree(midChildLayoutDomNode, maxLevel);
    }
  }
}

function buildDisplayTreeNode(node, level, treeInfo) {
  if (!node) {
    return null;
  }
  const displayTreeNode = {
    node,
    title: node.title,
    highLight: node.highLight,
    boxColor: node.boxColor,
    isPatch: node.isPatch,
    count: node.count,
    parent: null,
    children: [],
    isMiddleChild: false,
    index: 0,
    level,
  };
  if (level > treeInfo.maxLevel) {
    treeInfo.maxLevel = level;
  }
  const {children} = node;
  children && children.forEach((childDomNode) => {
    const childDrawNode = buildDisplayTreeNode(childDomNode, level + 1, treeInfo);
    if (childDrawNode) {
      childDrawNode.parent = displayTreeNode;
      displayTreeNode.children.push(childDrawNode);
    }
  });
  return displayTreeNode;
}

function correctDisplayTreeNode(displayTreeNode, maxLevel) {
  if (!displayTreeNode) {
    return null;
  }

  const {children, level} = displayTreeNode;
  if (children && children.length > 0) {
    if (children.length % 2 === 0) {
      const midDisplayTreeNode = {
        node: null,
        parent: displayTreeNode,
        children: [],
        isMiddleChild: true,
        index: 0,
        level: level + 1,
      };
      children.splice(children.length / 2, 0, midDisplayTreeNode);
    }
    children[(children.length - 1) / 2].isMiddleChild = true;

    children.forEach((childDrawNode) => {
      correctDisplayTreeNode(childDrawNode, maxLevel);
    });
  } else {
    if (level < maxLevel) {
      const midDisplayTreeNode = {
        node: null,
        parent: displayTreeNode,
        children: [],
        isMiddleChild: true,
        index: 0,
        level: level + 1,
      };
      displayTreeNode.children.push(midDisplayTreeNode);

      correctDisplayTreeNode(midDisplayTreeNode, maxLevel);
    }
  }
}


function layoutDisplayTreeNode(node, treeInfo) {
  if (!node) {
    return null;
  }
  const displayTreeNode = buildDisplayTreeNode(node, 0, treeInfo);
  // console.log('SSU', 'buildLayoutDomNodeTree', {layoutDomNode, treeInfo});
  correctDisplayTreeNode(displayTreeNode, treeInfo.maxLevel);
  // console.log('SSU', 'correctLayoutDomNodeTree', {layoutDomNode, treeInfo});
  const queue = [];
  queue.push(displayTreeNode);
  let index = 0;
  while (queue.length > 0) {
    const queueNode = queue.shift();
    const {children} = queueNode;
    if (children && children.length) {
      children.forEach((childDrawNode) => {
        queue.push(childDrawNode);
      });
    } else {
      queueNode.index = index;
      let parent = queueNode.isMiddleChild ? queueNode.parent : null;
      while (parent) {
        parent.index = index;
        parent = parent.isMiddleChild ? parent.parent : null;
      }
      index ++;

      if (index > treeInfo.maxIndex) {
        treeInfo.maxIndex = index;
      }
    }
  }

  return displayTreeNode;
}

function getDisplayTreeNodeXY(displayTreeNode, offsetLeafCount, horizontal = false) {
  const {index, level} = displayTreeNode;
  let x, y;
  if (horizontal) {
    x = DOMInitY + level * 3 * DOMYStep;
    y = DOMInitX + (offsetLeafCount + index) * DOMXStep;
  } else {
    x = DOMInitX + (offsetLeafCount + index) * DOMXStep;
    y = DOMInitY + level * DOMYStep;
  }

  return {x, y};
}

function drawDisplayTreeNode(cxt, displayTreeNode, offsetLeafCount, horizontal = false) {
  if (!displayTreeNode || !displayTreeNode.node) {
    return;
  }
  const { title, count, children, highLight, boxColor, isPatch } = displayTreeNode;
  // const styleStr = style ? `(${style.width ? style.width : 'w'}, ${style.height ? style.height : 'h'}) ${style.text ? style.text : ''}` : '';
  const {x, y} = getDisplayTreeNodeXY(displayTreeNode, offsetLeafCount, horizontal);
  const width = 6 * DOMRadius;
  const height = DOMRadius;
    // line
  cxt.strokeStyle = DOMNodeChildLineColor;
  cxt.lineWidth = 1;
  children && children.forEach((childDisplayTreeNode) => {
    if (childDisplayTreeNode && childDisplayTreeNode.node) {
      const {x: xx, y: yy} = getDisplayTreeNodeXY(childDisplayTreeNode, offsetLeafCount, horizontal);
      cxt.beginPath();
      cxt.moveTo(x + width / 2, y);
      cxt.lineTo(xx - width / 2, yy);
      cxt.stroke();
    }
  });


  // console.log('SSU', 'drawDomNode', {x, y, domNode});
  cxt.lineWidth = 1;
  cxt.fillStyle = highLight ? HighLightRunRecordNodeColor : RunRecordNodeColor;
  cxt.beginPath();
  cxt.rect(x - width / 2, y - height / 2, width, height);
  cxt.closePath();
  cxt.fill();

  if (boxColor) {
    cxt.lineWidth = 2;
    cxt.strokeStyle = boxColor;
    cxt.beginPath();
    cxt.rect(x - width / 2, y - height / 2, width, height);
    cxt.closePath();
    cxt.stroke();
  }

  if (isPatch) {
    const lineWidth = 3;
    cxt.lineWidth = lineWidth;
    cxt.strokeStyle = 'purple';
    cxt.beginPath();
    cxt.rect(x - width / 2 - lineWidth, y - height / 2 - lineWidth, width + 2 * lineWidth, height + 2 * lineWidth);
    cxt.closePath();
    cxt.stroke();
  }

  const text = `${title}*${count}`;
  cxt.fillStyle = FontColor;
  cxt.font = RunRecordFont;
  cxt.fillText(text, x - cxt.measureText(text).width / 2, y + 0.3 * DOMFontSize);
  children && children.forEach((childDisplayTreeNode) => {
    drawDisplayTreeNode(cxt, childDisplayTreeNode, offsetLeafCount, horizontal);
  });
}

function drawTree(cxt, node) {
  const treeInfo = {maxLevel: 0, maxIndex: 0};
  const displayTreeNode = layoutDisplayTreeNode(node, treeInfo);
  drawDisplayTreeNode(cxt, displayTreeNode, 0, true);
  console.log('SSU', 'drawTree', displayTreeNode);
}

export default function drawFiberTree(currentFiberID, fibers, doms, runRecordRootNode, ratio) {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) {
    return;
  }
  init(ratio);
  const cxt = canvas.getContext('2d');
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  cxt.save();
  console.log('SSU', 'drawFiberTree', {fibers, doms, runRecordRootNode});
  // console.log('SSU', 'drawFiberTree', {fibers, doms}, JSON.stringify(fibers), JSON.stringify(doms));
  // fibers
  if (fibers) {
    const fiberXYObj = {};
    const fiberRoots = [];
    fibers.forEach(fiber => {
      fiberXYObj[fiber.id] = fiber;
      if (fiber.return === InvalidID) {
        fiberRoots.push(fiber.id);
      }

      fiber.x = 0;
      fiber.y = 0;
    });
    fiberRoots
      .sort((idA , idB) => {
        if (fiberXYObj[idA] && fiberXYObj[idA].tag && fiberXYObj[idA].tag.indexOf('current') !== -1) {
          return false;
        }
        if (fiberXYObj[idB] && fiberXYObj[idB].tag && fiberXYObj[idB].tag.indexOf('current') !== -1) {
          return true;
        }
        if (fiberXYObj[idA] && fiberXYObj[idA].tag && fiberXYObj[idA].tag.indexOf('finishedWork') !== -1) {
          return false;
        }
        if (fiberXYObj[idB] && fiberXYObj[idB].tag && fiberXYObj[idB].tag.indexOf('finishedWork') !== -1) {
          return true;
        }
        return idA - idB > 0;
      })
      .forEach((id, index) => {
        layoutFiberNode(id, fiberXYObj, InitX + index * RootXStep, InitY);
      });
    const alternateIDSet = new Set();
    fiberRoots.forEach((id) => {
      drawFiberLine(cxt, id, fiberXYObj, alternateIDSet);
    });
    fiberRoots.forEach((id) => {
      drawFiberNode(cxt, id, fiberXYObj, currentFiberID);
    });
    console.log('SSU', 'drawFiberTree.fibers', {fiberXYObj, fiberRoots});
  }

  cxt.translate(DOMXOffset, 0);
  // doms
  if (doms) {
    const domRootTagSet = new Set();
    const domTag2NodeMap = new Map();
    doms.forEach((dom) => {
      const {name, id, nativeTag, children, style} = dom;
      domRootTagSet.add(nativeTag);
      domTag2NodeMap.set(nativeTag, {
        name,
        id,
        style,
        nativeTag,
        parent: null,
        children: null,
        level: 0,
        index: 0,
      });
    });
    doms.forEach((dom) => {
      const {name, id, nativeTag, children, style} = dom;
      const domNode = domTag2NodeMap.get(nativeTag);
      domNode.children = [];
      children && children.forEach((childNativeTag) => {
        const childDomNode = domTag2NodeMap.get(childNativeTag);
        domNode.children.push(childDomNode);

        domRootTagSet.delete(childNativeTag);
      });
    });

    // console.log('SSU', 'drawFiberTree.doms', {domRootTagSet, domTag2NodeMap});

    let rootDomNodeOffsetLeafCount = 0;
    domRootTagSet.forEach((nativeTag) => {
      const domNode = domTag2NodeMap.get(nativeTag);
      const treeInfo = {maxLevel: 0, maxIndex: 0};
      layoutDomNode(domNode, treeInfo);
      rootDomNodeOffsetLeafCount += treeInfo.maxIndex;
      drawDomNode(cxt, domNode, rootDomNodeOffsetLeafCount, currentFiberID);
    });
  }

  cxt.translate(DOMXOffset, 0);
  // runRecordRootNode
  drawTree(cxt, runRecordRootNode);
  cxt.restore();
};


