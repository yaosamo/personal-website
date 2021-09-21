class IndexPage extends React.Component {
  componentDidMount() {
    var req = require.context('../images/games/gameboy/', false, /.*\.png$/);
    req.keys().forEach(function(key) {
      req(key);
    });
  }

  
}