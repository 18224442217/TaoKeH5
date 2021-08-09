module.exports = ({ file }) => {
  // const designWidth = file.dirname.includes('./src/views/lanhu_102_fenxiangtu/assets') ? 1126 : 750;
  const designWidth = file.dirname.includes('src/views/shareImg') ? 1126 : 750;
  return {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        unitToConvert: "px",
        viewportWidth: designWidth ,
        unitPrecision: 6,
        propList: ["*"],
        viewportUnit: "vw",
        fontViewportUnit: "vw",
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: true,
        exclude: [],
        landscape: false
      }
    }
  }

}