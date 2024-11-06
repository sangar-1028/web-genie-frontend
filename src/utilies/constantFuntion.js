export   const calculateSize = (width) => {
    if (width < 100) return width-200;
    if (width < 600) return width;
    return width-400;
  };