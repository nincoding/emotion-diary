const presets = [
  "@babel/preset-react",
  [
    "@babel/preset-env",
    {
      targets: "> 0.25%, not dead",
      modules: false,
      useBuiltIns: "usage",
      corejs: 3,
    },
  ],
];

const plugins = [];

module.exports = { presets, plugins };