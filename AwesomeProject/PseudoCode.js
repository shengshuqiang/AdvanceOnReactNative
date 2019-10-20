function ReactNativeRenderer_render(Component) {
    const root = {};
    const workInProgress = {root};
    let nextUnitOfWork = root;
    // 深度优先遍历完所有Fiber节点
    { /** workLoop */
        while (nextUnitOfWork !== null) {
            { /** beginWork */
                // 判断数据是否变化（属性相关）
                const hasDataChanged = {}
                // 数据没有变化，则直接当前Fiber节点克隆出工作Fiber节点，详见bailoutOnAlreadyFinishedWork
                const bailoutOnAlreadyFinishedWork = function (workInProgress) {};
                if (!hasDataChanged) {
                    nextUnitOfWork = bailoutOnAlreadyFinishedWork(workInProgress);
                } else {
                    // 数据变化，重新创建Fiber节点
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
                                const { oldProps, newProps, oldState, newState, oldContext, newContext } = workInProgress;
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
                                    // 已存在，则diff更新(为了简化，忽略resumeMountClassInstance)
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
                                                const shallowEqual = function () {};
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
                                nextUnitOfWork = finishClassComponent;
                                /** finishClassComponent */
                                {
                                    if (!shouldUpdate) {
                                        nextUnitOfWork = bailoutOnAlreadyFinishedWork(workInProgress);
                                    } else {
                                        const nextChildren = instance.render();
                                        /** reconcileChildFibers
                                         * 硬核diff算法
                                         * */
                                        {
                                            const isObject = typeof nextChildren === "object" && nextChildren;
                                            if (isObject) {
                                                /** reconcileSingleElement */
                                                {
                                                    const {} = workInProgress;
                                                }
                                            }
                                            reconcileChildFibers(
                                                workInProgress,
                                                current$$1.child,
                                                nextChildren,
                                                renderExpirationTime
                                            );
                                        }
                                    }
                                }
                                const nextChildren = instance.render();
                                updateClassComponent = nextChildren;
                            }
                            break;
                        }
                        case HostComponent:
                            return updateHostComponent(
                                current$$1,
                                workInProgress,
                                renderExpirationTime
                            );
                        case HostText:
                            return updateHostText(current$$1, workInProgress);
                    }
                }
                nextUnitOfWork = beginWork(current$$1, workInProgress, nextRenderExpirationTime);
            }
            if (nextUnitOfWork === null) {
                // If this doesn't spawn new work, complete the current work.
                { /** completeUnitOfWork */
                    nextUnitOfWork = completeUnitOfWork(workInProgress);
                }
            }
        }
    }
}
