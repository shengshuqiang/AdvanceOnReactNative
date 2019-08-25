const RealDOMElements = ['HostComponent', 'HostText'];
let Radius;
let DOMRadius;
let FontSize;
let DOMFontSize;
let DescFontSize;
let FontColor;
let DescFontColor;
let Font;
let DOMFont;
let DescFont;
let XStep;
let RootXStep;
let YStep;
let InitX;
let InitY;
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
    FontColor = 'black';
    Font = FontSize + 'px  Arial';
    DOMFont = DOMFontSize + 'px  Arial';
    DescFontColor = 'gray';
    DescFontSize = 10;
    DescFont = DescFontSize + 'px  Arial';
    XStep = 4 * Radius;
    RootXStep = 4 * XStep;
    YStep = 3 * Radius;
    InitX = 2 * Radius;
    InitY = 2 * Radius;
    DOMXStep = 5 * DOMRadius;
    DOMRootXStep = 2 * DOMXStep;
    DOMYStep = 3 * DOMRadius;
    DOMInitX = 3 * DOMRadius;
    DOMInitY = 2 * DOMRadius;
    InvalidID = -1;
  }
}

const NodeColor = '#FF0000';
const RealDOMNodeColor = '#32cd32';
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
    if (fiber.alternate !== InvalidID && !alternateIDSet.has(id) && !alternateIDSet.has(fiber.alternate)) {
      alternateIDSet.add(id);
      alternateIDSet.add(fiber.alternate);
      const alternateFiber = fiberXYObj[fiber.alternate];
      cxt.strokeStyle = NodeAlternateLineColor;
      cxt.beginPath();
      cxt.moveTo(x, y);
      cxt.bezierCurveTo(x, y - 2 * Radius, alternateFiber.x, alternateFiber.y - 2 * Radius, alternateFiber.x, alternateFiber.y);
      cxt.stroke();
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
    }

    drawFiberLine(cxt, fiber.child, fiberXYObj, alternateIDSet);
    drawFiberLine(cxt, fiber.sibling, fiberXYObj, alternateIDSet);
  }
};

function drawFiberNode(cxt, id, fiberXYObj) {
  if (id !== InvalidID) {
    const fiber = fiberXYObj[id];
    const {x, y, tag, effectTag, type, nativeTag} = fiber;
    // circle
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

    drawFiberNode(cxt, fiber.child, fiberXYObj);
    drawFiberNode(cxt, fiber.sibling, fiberXYObj);
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
  const x = DOMInitX + (offsetLeafCount + index) * DOMXStep;
  const y = DOMInitY + level * DOMYStep;

  return {x, y};
}

function drawDomNode(cxt, domNode, offsetLeafCount) {
  if (!domNode) {
    return;
  }
  const {name, nativeTag, children, style, index, level} = domNode;
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


  console.log('SSU', 'drawDomNode', {x, y, domNode});
  cxt.lineWidth = LineWidth;
  cxt.fillStyle = RealDOMNodeColor;
  cxt.beginPath();
  cxt.rect(x - DOMRadius, y - DOMRadius, 2 * DOMRadius, 2 * DOMRadius);
  cxt.closePath();
  cxt.fill();

  cxt.fillStyle = FontColor;
  cxt.font = DOMFont;
  cxt.fillText(nativeTag, x - cxt.measureText(nativeTag).width / 2, y + 0 * DOMFontSize);
  cxt.fillText(name, x - cxt.measureText(name).width / 2, y + 1.0 * DOMFontSize);
  cxt.font = DescFont;
  cxt.fillText(styleStr, x - cxt.measureText(styleStr).width / 2, y + 2 * DOMFontSize);
  children && children.forEach((childDomNode, childIndex) => {
    drawDomNode(cxt, childDomNode, offsetLeafCount, childIndex);
  });
}

function layoutDomNode(domNode, treeInfo) {
  if (!domNode) {
    return null;
  }
  const layoutDomNode = buildLayoutDomNodeTree(domNode, 0, treeInfo);
  console.log('SSU', 'buildLayoutDomNodeTree', {layoutDomNode, treeInfo});
  correctLayoutDomNodeTree(layoutDomNode, treeInfo.maxLevel);
  console.log('SSU', 'correctLayoutDomNodeTree', {layoutDomNode, treeInfo});
  const queue = [];
  queue.push(layoutDomNode);
  let index = 0;
  while (queue.length > 0) {
    const node = queue.shift();
    const {children} = node;
    if (children) {
      children && children.forEach((childLayoutDomNode, childIndex) => {
        queue.push(childLayoutDomNode);
      });
    } else {
      node.index = index;
      if (node.domNode) {
        node.domNode.index = index;
        node.domNode.level = node.level;
        console.log('SSU', 'layoutDomNode', node.domNode.nativeTag, {index, level: node.domNode.level, node});
      }
      let parent = node.isMiddleChild ? node.parent : null;
      while (parent) {
        if (parent.domNode) {
          parent.domNode.index = index;
          parent.domNode.level = parent.level;
          console.log('SSU', 'layoutDomNode', parent.domNode.nativeTag, {index, level: parent.domNode.level, node});
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
  console.log('SSU', 'buildLayoutDomNodeTree', domNode.nativeTag, {index: layoutDomNode.index, level});
  return layoutDomNode;
}

function correctLayoutDomNodeTree(layoutDomNode, maxLevel) {
  if (!layoutDomNode) {
    return null;
  }

  const {children, level} = layoutDomNode;
  if (children) {
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

export default function drawFiberTree(fibers, doms, ratio) {
  const canvas = document.getElementById('myCanvas');
  if (!canvas) {
    return;
  }
  init(ratio);
  const cxt = canvas.getContext('2d');
  cxt.clearRect(0, 0, canvas.width, canvas.height);
  cxt.save();
  console.log('SSU', 'drawFiberTree', {fibers, doms});
  // console.log('SSU', 'drawFiberTree', {fibers, doms}, JSON.stringify(fibers), JSON.stringify(doms));
  // doms
  if (doms) {
    const domRootTagSet = new Set();
    const domTag2NodeMap = new Map();
    doms.forEach((dom) => {
      const {name, nativeTag, children, style} = dom;
      domRootTagSet.add(nativeTag);
      domTag2NodeMap.set(nativeTag, {
        name,
        style,
        nativeTag,
        parent: null,
        children: null,
        level: 0,
        index: 0,
      });
    });
    doms.forEach((dom) => {
      const {name, nativeTag, children, style} = dom;
      const domNode = domTag2NodeMap.get(nativeTag);
      domNode.children = [];
      children && children.forEach((childNativeTag) => {
        const childDomNode = domTag2NodeMap.get(childNativeTag);
        domNode.children.push(childDomNode);

        domRootTagSet.delete(childNativeTag);
      });
    });

    console.log('SSU', 'drawFiberTree.doms', {domRootTagSet, domTag2NodeMap});

    let rootDomNodeOffsetLeafCount = 0;
    domRootTagSet.forEach((nativeTag) => {
      const domNode = domTag2NodeMap.get(nativeTag);
      const treeInfo = {maxLevel: 0, maxIndex: 0};
      layoutDomNode(domNode, treeInfo);
      rootDomNodeOffsetLeafCount += treeInfo.maxIndex;
      drawDomNode(cxt, domNode, rootDomNodeOffsetLeafCount);
    });
    cxt.translate(DOMInitX + rootDomNodeOffsetLeafCount * DOMXStep + DOMRootXStep, 0);
  }

  // fibers
  if (fibers) {
    const fiberXYObj = {};
    const fiberRoots = [];
    fibers.forEach(fiber => {
      fiberXYObj[fiber.id] = fiber;
      if (fiber.return === InvalidID) {
        fiberRoots.push(fiber.id);
      }
    });
    fiberRoots.forEach((id, index) => {
      layoutFiberNode(id, fiberXYObj, InitX + index * RootXStep, InitY);
    });
    const alternateIDSet = new Set();
    fiberRoots.forEach((id) => {
      drawFiberLine(cxt, id, fiberXYObj, alternateIDSet);
    });
    fiberRoots.forEach((id) => {
      drawFiberNode(cxt, id, fiberXYObj);
    });
    console.log('SSU', 'drawFiberTree.fibers', {fiberXYObj, fiberRoots});

  }
  cxt.restore();
};


