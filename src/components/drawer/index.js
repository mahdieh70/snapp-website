import classNames from "classnames";
import { Colors } from "components/colors";
// import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import ReactDOM from "react-dom";
import { useOnClickOutSide } from "utils/useOnclickOutsiede";
import styles from "./drawer.module.css";

const Drawer = ({
  isVisible,
  children,
  onClose,
  getContainer,
  placement = "bottom",
  height,
  width,
  destroyOnClose,
}) => {
  const [drawerRef, setDrawerRef] = useState(null);
  const [bodyRef, setBodyRef] = useState(null);

  const handleDrawerRef = (node) => {
    setDrawerRef(node);
  };

  useEffect(() => {
    setBodyRef(document.body);
  }, []);

  useOnClickOutSide({
    element: drawerRef,
    handler() {
      onClose();
    },
  });

  const mask = <div className={classNames(styles["mask"])} />;

  const portalContainerElement = useMemo(() => {
    if (
      getContainer &&
      getContainer?.style.position &&
      getContainer?.style.position !== "static" &&
      getContainer.style.overflow === "hidden"
    ) {
      return getContainer;
    } else return bodyRef;
  }, [getContainer, bodyRef]);

  const drawerPositionStrategy =
    portalContainerElement?.localName === "body" ? "fixed" : "absolute";

  const dimentions = useMemo(() => {
    const portalContainerElementRect =
      portalContainerElement?.getBoundingClientRect();

    const containerHeight = portalContainerElementRect?.height;
    const containerWidth = portalContainerElementRect?.width;

    if (!containerHeight || !containerWidth) return;
    else if (placement === "bottom") {
      const _height = height || containerHeight - 100;
      return {
        rect: { width: "100%", height: _height },
        initial: { bottom: -_height, left: 0 },
        animateTo: { bottom: 0, left: 0 },
      };
    } else if (placement === "right") {
      const _width = width || containerWidth - 100;
      return {
        rect: { height: "100%", width: _width },
        initial: { bottom: 0, right: -_width },
        animateTo: { bottom: 0, right: 0 },
      };
    } else if (placement === "top") {
      const _height = height || containerHeight - 100;
      return {
        rect: { width: "100%", height: _height },
        initial: { left: 0, top: -_height },
        animateTo: { top: 0, left: 0 },
      };
    } else if (placement === "left") {
      const _width = width || containerWidth - 100;
      return {
        rect: { height: "100%", width: _width },
        initial: { top: 0, left: -_width },
        animateTo: { top: 0, left: 0 },
      };
    }
  }, [height, placement, portalContainerElement, width]);

  const content = (
    <div
      ref={handleDrawerRef}
    //   initial={{ ...dimentions?.initial, opacity: 0 }}
    //   animate={{
    //     ...(isVisible && dimentions?.animateTo),
    //     opacity: isVisible ? 1 : 0,
    //   }}
    //   exit={{ ...dimentions?.initial, opacity: 0 }}
      style={{
        position: drawerPositionStrategy,
        backgroundColor: Colors.color_white,
        ...dimentions?.rect,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      {portalContainerElement
        ? ReactDOM.createPortal(
            <>
              {isVisible ? mask : null}
              {/* <AnimatePresence> */}
              {!isVisible && destroyOnClose ? null : content}
              {/* </AnimatePresence> */}
            </>,
            portalContainerElement
          )
        : null}
    </>
  );
};

export { Drawer };
