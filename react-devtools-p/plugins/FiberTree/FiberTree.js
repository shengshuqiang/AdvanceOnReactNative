// const fibers = [{
//     "id": 0,
//     "desc": "0_HostRoot_",
//     "return": -1,
//     "child": 22,
//     "sibling": -1,
//     "alternate": 1,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 22,
//     "desc": "22_ClassComponent_",
//     "return": 0,
//     "child": 23,
//     "sibling": -1,
//     "alternate": 3,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 23,
//     "desc": "23_ForwardRef_",
//     "return": 22,
//     "child": 24,
//     "sibling": -1,
//     "alternate": 4,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 24,
//     "desc": "24_ContextConsumer_",
//     "return": 23,
//     "child": 25,
//     "sibling": -1,
//     "alternate": 5,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 25,
//     "desc": "25_HostComponent_",
//     "return": 24,
//     "child": 26,
//     "sibling": -1,
//     "alternate": 6,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 26,
//     "desc": "26_ForwardRef_",
//     "return": 25,
//     "child": 9,
//     "sibling": 27,
//     "alternate": 7,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 9,
//     "desc": "9_ContextConsumer_",
//     "return": 7,
//     "child": 10,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 10,
//     "nextEffect": -1
// }, {
//     "id": 10,
//     "desc": "10_HostComponent_Ref,",
//     "return": 9,
//     "child": 11,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 11,
//     "nextEffect": 8
// }, {
//     "id": 11,
//     "desc": "11_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 10,
//     "child": 12,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 12,
//     "nextEffect": 10
// }, {
//     "id": 12,
//     "desc": "12_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 11,
//     "child": 13,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": 11
// }, {
//     "id": 13,
//     "desc": "13_ForwardRef_",
//     "return": 12,
//     "child": 14,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 14,
//     "desc": "14_ContextConsumer_",
//     "return": 13,
//     "child": 15,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 15,
//     "desc": "15_HostComponent_",
//     "return": 14,
//     "child": 16,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 16,
//     "desc": "16_ForwardRef_",
//     "return": 15,
//     "child": 17,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": 17,
//     "lastEffect": 17,
//     "nextEffect": -1
// }, {
//     "id": 17,
//     "desc": "17_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 16,
//     "child": 18,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": 12
// }, {
//     "id": 18,
//     "desc": "18_ContextConsumer_",
//     "return": 17,
//     "child": 19,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 19,
//     "desc": "19_ContextProvider_",
//     "return": 18,
//     "child": 20,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 20,
//     "desc": "20_HostComponent_",
//     "return": 19,
//     "child": 21,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 21,
//     "desc": "21_HostText_",
//     "return": 20,
//     "child": -1,
//     "sibling": -1,
//     "alternate": -1,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 27,
//     "desc": "27_ClassComponent_",
//     "return": 25,
//     "child": 28,
//     "sibling": -1,
//     "alternate": 8,
//     "firstEffect": 28,
//     "lastEffect": 28,
//     "nextEffect": -1
// }, {
//     "id": 28,
//     "desc": "28_ClassComponent_Update,PlacementAndUpdate,",
//     "return": 27,
//     "child": -1,
//     "sibling": -1,
//     "alternate": 29,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 29,
//     "desc": "29_ClassComponent_",
//     "return": 8,
//     "child": -1,
//     "sibling": -1,
//     "alternate": 28,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 8,
//     "desc": "8_ClassComponent_",
//     "return": 6,
//     "child": 29,
//     "sibling": -1,
//     "alternate": 27,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 7,
//     "desc": "7_ForwardRef_",
//     "return": 6,
//     "child": 9,
//     "sibling": 8,
//     "alternate": 26,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 6,
//     "desc": "6_HostComponent_",
//     "return": 5,
//     "child": 7,
//     "sibling": -1,
//     "alternate": 25,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 5,
//     "desc": "5_ContextConsumer_",
//     "return": 4,
//     "child": 6,
//     "sibling": -1,
//     "alternate": 24,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 4,
//     "desc": "4_ForwardRef_",
//     "return": 3,
//     "child": 5,
//     "sibling": -1,
//     "alternate": 23,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 3,
//     "desc": "3_ClassComponent_",
//     "return": 1,
//     "child": 4,
//     "sibling": -1,
//     "alternate": 22,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }, {
//     "id": 1,
//     "desc": "1_HostRoot_",
//     "return": -1,
//     "child": 3,
//     "sibling": -1,
//     "alternate": 0,
//     "firstEffect": -1,
//     "lastEffect": -1,
//     "nextEffect": -1
// }];
let Radius;
let FontSize;
let DescFontSize;
let FontColor;
let DescFontColor;
let Font;
let DescFont;
let XStep;
let RootXStep;
let YStep;
let InitX;
let InitY;
let InvalidID;

function init(ratio) {
    if (ratio > 0) {
        Radius = 30 * ratio;
        FontSize = 20 * ratio;
        FontColor = 'black';
        Font = FontSize + 'px  Arial';
        DescFontColor = 'gray';
        DescFontSize = 10;
        DescFont = DescFontSize + 'px  Arial';
        XStep = 4 * Radius;
        RootXStep = 4 * XStep;
        YStep = 3 * Radius;
        InitX = 2 * Radius;
        InitY = 2 * Radius;
        InvalidID = -1;
    }
}

const NodeColor = '#FF0000';
const NodeAlternateLineColor = 'purple';
const NodeChildLineColor = 'green';
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
        const {x, y, tag, effectTag, type} = fiber;
        // circle
        cxt.fillStyle = NodeColor;
        cxt.beginPath();
        cxt.arc(x, y, Radius, 0, Math.PI * 2, true);
        cxt.closePath();
        cxt.fill();
        // text
        const text = id;
        cxt.fillStyle = FontColor;
        cxt.font = Font;
        cxt.fillText(text, x - cxt.measureText(text).width / 2, y);
        // tag
        cxt.fillStyle = DescFontColor;
        cxt.font = DescFont;
        cxt.fillText(tag, x - cxt.measureText(tag).width / 2, y + 0.7 * FontSize);
        cxt.fillText(type, x - cxt.measureText(type).width / 2, y + 1.4 * FontSize);
        cxt.fillText(effectTag, x - cxt.measureText(effectTag).width / 2, y + 2.1 * FontSize);

        drawFiberNode(cxt, fiber.child, fiberXYObj);
        drawFiberNode(cxt, fiber.sibling, fiberXYObj);

    }
};

function layoutFiberNode(id, fiberXYObj, x, y) {
    if (id !== InvalidID) {
        const fiber = fiberXYObj[id];
        fiberXYObj[id].x = x;
        fiberXYObj[id].y = y;

        layoutFiberNode(fiber.child, fiberXYObj, x, y + YStep);
        layoutFiberNode(fiber.sibling, fiberXYObj, x + XStep, y);
    }
};

export default function drawFiberTree(fibers, ratio) {
    if (!fibers) {
        return;
    }
    const canvas = document.getElementById("myCanvas");
    if (!canvas) {
        return;
    }
    init(ratio);
    const cxt = canvas.getContext("2d");
    const fiberXYObj = {};
    const fiberRoots = [];
    cxt.clearRect(0, 0, canvas.width, canvas.height);
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
    // console.log('SSU', JSON.stringify(fiberXYObj));
};


