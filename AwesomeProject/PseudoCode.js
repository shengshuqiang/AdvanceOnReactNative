function ReactNativeRenderer_render() {
    const ClassComponent = 1;
    const HostComponent = 5;
    const HostText = 6;
    const Snapshot = 256;
    const Placement = 2;
    const Update = 4;
    const PlacementAndUpdate = 6;
    const Deletion = 8;

    const root = {};
    const {current, workInProgress, rootContainerInstance} = root;
    let {nextUnitOfWork, nextEffect} = root;
    const {oldProps, newProps, oldState, newState, oldContext, newContext} = workInProgress;
    /** performWorkOnRoot */
    {
        /** renderRoot */
        {
            // 深度优先遍历完所有Fiber节点
            /** workLoop */
            {
                while (nextUnitOfWork !== null) {
                    /** performUnitOfWork */
                    {
                        /** beginWork */
                        {
                            // 判断数据是否变化（属性相关）
                            const hasDataChanged = {}
                            // 数据没有变化，则直接当前Fiber节点克隆出工作Fiber节点，详见bailoutOnAlreadyFinishedWork
                            const bailoutOnAlreadyFinishedWork = function (workInProgress) {
                            };
                            if (!hasDataChanged) {
                                nextUnitOfWork = bailoutOnAlreadyFinishedWork(workInProgress);
                            } else {
                                // 数据变化，重新创建Fiber节点
                                /** updateXXX */
                                switch (workInProgress.tag) {
                                    case ClassComponent: {
                                        /** updateClassComponent
                                         * 调用生命周期，新旧取决于用于在类里面增加的方法是新还是旧，
                                         * 如果都有则只调用新的，新生命周期对应construct->getDerivedStateFromProps->render，
                                         * 旧生命周期对应construct->componentWillMount->UNSAFE_componentWillMount->render。
                                         * nextChildren = instance.render()
                                         * */
                                        {
                                            let instance = workInProgress.stateNode;
                                            // 根据是否有新生命周期方法判断是否要调用旧生命周期
                                            const ctor = workInProgress.type;
                                            const getDerivedStateFromProps = ctor.getDerivedStateFromProps;
                                            const hasNewLifecycles = ctor.getDerivedStateFromProps && instance.getSnapshotBeforeUpdate;
                                            if (instance === null) {
                                                // 初始创建
                                                /** constructClassInstance */
                                                {
                                                    // 调用construct实例化组件
                                                    instance = new ctor();
                                                }
                                                /** mountClassInstance */
                                                {
                                                    /** applyDerivedStateFromProps */
                                                    {
                                                        // 调用新生命周期getDerivedStateFromProps
                                                        getDerivedStateFromProps(newProps, oldState);
                                                    }

                                                    if (!hasNewLifecycles) {
                                                        // 调用旧生命周期
                                                        /** callComponentWillMount */
                                                        {
                                                            // 调用旧生命周期componentWillMount
                                                            instance.componentWillMount();
                                                            instance.UNSAFE_componentWillMount();
                                                        }
                                                    }
                                                }
                                            } else {
                                                // 已存在，则Diff更新(为了简化，忽略resumeMountClassInstance)
                                                /** updateClassInstance */
                                                {
                                                    // 更新实例
                                                    let shouldUpdate;
                                                    const hasPropsChanged = oldProps !== newProps || oldContext !== newContext;
                                                    if (!hasNewLifecycles && hasPropsChanged) {
                                                        // 无新生命周期且属性变化
                                                        /** callComponentWillReceiveProps */
                                                        {
                                                            // 调用旧生命周期componentWillReceiveProps
                                                            instance.componentWillReceiveProps(newProps, newContext);
                                                            instance.UNSAFE_componentWillReceiveProps(newProps, newContext);
                                                        }
                                                    }

                                                    /** applyDerivedStateFromProps */
                                                    {
                                                        // 调用新生命周期getDerivedStateFromProps
                                                        getDerivedStateFromProps(newProps, oldState);
                                                    }

                                                    /** checkShouldComponentUpdate */
                                                    {
                                                        if (instance.shouldComponentUpdate) {
                                                            // 刷新逻辑交个用户控制，也就是大家说的高性能操作
                                                            shouldUpdate = instance.shouldComponentUpdate(newProps, newState, newContext);
                                                        } else if (ctor.prototype.isPureReactComponent) {
                                                            // 纯组件，进行浅比较判断是否刷新
                                                            const shallowEqual = function () {
                                                            };
                                                            shouldUpdate = !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState);
                                                        } else {
                                                            // 普通组件，直接刷新
                                                            shouldUpdate = true;
                                                        }
                                                    }

                                                    if (shouldUpdate) {
                                                        if (!hasNewLifecycles) {
                                                            // 调用旧生命周期componentWillUpdate
                                                            instance.componentWillUpdate(newProps, newState, newContext);
                                                            instance.UNSAFE_componentWillUpdate(newProps, newState, newContext);
                                                        }
                                                    }
                                                }
                                            }
                                            /** finishClassComponent */
                                            {
                                                if (!shouldUpdate) {
                                                    nextUnitOfWork = bailoutOnAlreadyFinishedWork(workInProgress);
                                                } else {
                                                    const nextChildren = instance.render();
                                                    /** reconcileChildFibers
                                                     * 硬核Diff算法
                                                     * */
                                                    {
                                                        const isObject = typeof nextChildren === "object" && nextChildren;
                                                        if (isObject) {
                                                            /** reconcileSingleElement */
                                                            {
                                                                if (workInProgress) {
                                                                    // 判断key是否相等
                                                                    const isKeyEquals = workInProgress.key === nextChildren.key;
                                                                    if (isKeyEquals) {
                                                                        // 判断类型是否相同
                                                                        const isTypeEquals = child.elementType === nextChildren.type;
                                                                        if (isTypeEquals) {
                                                                            // Diff算法:类型相同,复用子节点树&删除子节点兄弟树
                                                                            (function deleteRemainingChildren(sibling) {
                                                                            })(workInProgress.sibling);
                                                                            workInProgress.child = (function useFiber(workInProgress) {
                                                                            })(workInProgress);
                                                                        } else {
                                                                            // Diff算法:类型不相同,删除全部子节点树
                                                                            (function deleteRemainingChildren(sibling) {
                                                                            })(workInProgress);
                                                                            // Diff算法:新建子节点
                                                                            workInProgress.child = (function createFiberFromElement(nextChildren) {
                                                                            })(nextChildren);
                                                                        }
                                                                    } else {
                                                                        // Diff算法:key不同,删除子节点树
                                                                        (function deleteChild(sibling) {
                                                                        })(workInProgress);
                                                                        // Diff算法:新建子节点
                                                                        workInProgress.child = (function createFiberFromElement(nextChildren) {
                                                                        })(nextChildren);
                                                                    }
                                                                }
                                                            }
                                                        } else {
                                                            /** 暂时忽略 */
                                                            // string、number
                                                            // array
                                                            // iterator
                                                            // undefined
                                                            // deleteRemainingChildren(returnFiber, currentFirstChild)
                                                        }
                                                    }
                                                    nextUnitOfWork = workInProgress.child;
                                                }
                                            }
                                        }
                                        break;
                                    }
                                    default:
                                        /** 忽略，不重要 */
                                        break;
                                }
                            }
                            nextUnitOfWork = beginWork(current$$1, workInProgress, nextRenderExpirationTime);
                        }
                        if (nextUnitOfWork === null) {
                            {
                                /** completeUnitOfWork
                                 *  深度优先遍历回溯，调用桥UIManager创建&连接Native View。
                                 *  同时生成副作用链表。
                                 *  */
                                while (true) {
                                    // nextUnitOfWork = completeWork(
                                    /** completeWork */
                                    {
                                        switch (workInProgress.tag) {
                                            case HostComponent: {
                                                // 是否已实例化
                                                const hasInstance = current && workInProgress.stateNode != null;
                                                if (hasInstance) {
                                                    /** updateHostComponent$1 */
                                                    {
                                                        if (oldProps !== newProps) {
                                                            const updatePayload = (function prepareUpdate(workInProgress) {
                                                            })(workInProgress);
                                                            workInProgress.updateQueue = updatePayload;
                                                        }
                                                    }
                                                } else {
                                                    let instance;
                                                    const tag = (function allocateTag() {
                                                    })();
                                                    const ReactNativeViewConfigRegistry = function () {
                                                    };
                                                    const viewConfig = ReactNativeViewConfigRegistry.get(workInProgress);
                                                    const updatePayload = create(props, viewConfig.validAttributes);
                                                    /** createInstance */
                                                    {
                                                        UIManager.createView(
                                                            tag, // reactTag
                                                            viewConfig.uiViewClassName, // viewName
                                                            rootContainerInstance, // rootTag
                                                            updatePayload // props
                                                        );

                                                        function ReactNativeFiberHostComponent() {
                                                        };
                                                        instance = new ReactNativeFiberHostComponent(tag, viewConfig)
                                                    }
                                                    /** appendAllChildren */
                                                    {
                                                        (function appendAllChildren(workInProgress) {
                                                        })(workInProgress);
                                                    }
                                                    /** finalizeInitialChildren */
                                                    {
                                                        const {parentInstance, nativeTags} = workInProgress;
                                                        UIManager.setChildren(
                                                            parentInstance._nativeTag, // containerTag
                                                            nativeTags // reactTags
                                                        );
                                                    }
                                                }
                                            }
                                                break;
                                            case HostText: {
                                                // 是否已实例化
                                                const hasInstance = current && workInProgress.stateNode != null;
                                                const {oldText, newText} = [oldProps, newProps];
                                                if (hasInstance) {
                                                    /** updateHostText$1 */
                                                    {
                                                        if (oldText !== newText) {
                                                            /** createTextInstance */
                                                            {
                                                                const tag = (function allocateTag() {
                                                                })();

                                                                UIManager.createView(
                                                                    tag, // reactTag
                                                                    "RCTRawText", // viewName
                                                                    rootContainerInstance, // rootTag
                                                                    {text: newText} // props
                                                                );
                                                                workInProgress.stateNode = tag;
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    /** createTextInstance */
                                                    {
                                                        const tag = (function allocateTag() {
                                                        })();

                                                        UIManager.createView(
                                                            tag, // reactTag
                                                            "RCTRawText", // viewName
                                                            rootContainerInstance, // rootTag
                                                            {text: newText} // props
                                                        );
                                                        workInProgress.stateNode = tag;
                                                    }
                                                }
                                            }
                                                break;
                                            default:
                                                /** 忽略 */
                                                break;
                                        }
                                    }
                                    if (nextUnitOfWork !== null) {
                                        return nextUnitOfWork;
                                    }
                                    /** 自底向上归并有效副作用节点，连接成副作用链表 */
                                }
                                nextUnitOfWork = completeUnitOfWork(workInProgress);
                            }
                        }
                    }
                }
            }
        }
        const {finishedWork} = root;
        const {firstEffect} = finishedWork;
        if (finishedWork !== null) {
            /** completeRoot */
            {
                const instance = finishedWork.stateNode;
                /** commitRoot */
                {
                    nextEffect = firstEffect;
                    while(nextEffect) {
                        /** commitBeforeMutationLifeCycles */
                        {
                            switch (finishedWork.tag) {
                                case ClassComponent:
                                    {
                                        if (finishedWork.effectTag & Snapshot) {
                                            // 调用新生命周期getSnapshotBeforeUpdate
                                            instance.getSnapshotBeforeUpdate(oldProps, oldState);
                                        }
                                    }
                                    break;
                                default:
                                    // 忽略
                                    break;
                            }
                        }
                        nextEffect = nextEffect.nextEffect;
                    }

                    nextEffect = firstEffect;
                    while(nextEffect) {
                        /** commitAllHostEffects */
                        {
                            var {effectTag} = nextEffect;
                            var primaryEffectTag = effectTag & (Placement | Update | Deletion);
                            switch (primaryEffectTag) {
                                case Placement:
                                    {
                                        /** commitPlacement */
                                        {
                                            const {containerID, moveFromIndices, moveToIndices, addChildReactTags, addAtIndices, removeAtIndices} = finishedWork;
                                            UIManager.manageChildren(containerID, moveFromIndices, moveToIndices,addChildReactTags,addAtIndices,removeAtIndices);
                                        }
                                    }
                                    break;
                                case PlacementAndUpdate:
                                    {
                                        /** commitPlacement */
                                        {
                                            const {containerID, moveFromIndices, moveToIndices, addChildReactTags, addAtIndices, removeAtIndices} = finishedWork;
                                            UIManager.manageChildren(containerID, moveFromIndices, moveToIndices,addChildReactTags,addAtIndices,removeAtIndices);
                                        }
                                        /** commitWork */
                                        {
                                            switch (finishedWork.tag) {
                                                case HostComponent:
                                                    {
                                                        /** commitUpdate */
                                                        const {reactTag, viewName, props} = finishedWork;
                                                        UIManager.updateView(reactTag, viewName, props);
                                                    }
                                                    break;
                                                case HostText:
                                                    {
                                                        /** commitTextUpdate */
                                                        const {reactTag, props} = finishedWork;
                                                        UIManager.updateView(reactTag, "RCTRawText", props);
                                                    }
                                                    break;
                                                default:
                                                    // 忽略
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case Update:
                                    {
                                        /** commitWork */
                                        {
                                            switch (finishedWork.tag) {
                                                case HostComponent:
                                                    {
                                                        /** commitUpdate */
                                                        const {reactTag, viewName, props} = finishedWork;
                                                        UIManager.updateView(reactTag, viewName, props);
                                                    }
                                                    break;
                                                case HostText:
                                                    {
                                                        /** commitTextUpdate */
                                                        const {reactTag, props} = finishedWork;
                                                        UIManager.updateView(reactTag, "RCTRawText", props);
                                                    }
                                                    break;
                                                default:
                                                    // 忽略
                                                    break;
                                            }
                                        }
                                    }
                                    break;
                                case Deletion:
                                    {
                                        /** commitDeletion */
                                        {
                                            /** commitUnmount */
                                            {
                                                let {node} = root;
                                                while(true) {
                                                    switch (node.tag) {
                                                        case ClassComponent:
                                                            {
                                                                instance.componentWillUnmount();
                                                            }
                                                            break;
                                                        default:
                                                            // 忽略
                                                            break;
                                                    }
                                                    node = node.sibling;
                                                    if (!node.return) {
                                                        break;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    // 忽略
                                    break;
                            }
                        }
                        nextEffect = nextEffect.nextEffect;
                    }

                    root.current = finishedWork;

                    nextEffect = firstEffect;
                    while(nextEffect) {
                        /** commitAllLifeCycles */
                        {
                            const current$$1 = nextEffect.alternate;
                            switch (finishedWork.tag) {
                                case ClassComponent:
                                    {
                                        if (current$$1 === null) {
                                            // 调用生命周期componentDidMount
                                            instance.componentDidMount();
                                        } else {
                                            // 调用新生命周期componentDidUpdate
                                            instance.componentDidUpdate(oldProps, oldState);
                                        }
                                    }
                                    break;
                                default:
                                    // 忽略
                                    break;
                            }
                        }
                        nextEffect = nextEffect.nextEffect;
                    }
                }
            }
        }
    }
}
