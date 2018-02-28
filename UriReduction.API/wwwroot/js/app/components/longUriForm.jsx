const React = require('react');

class LongUriForm extends React.Component{
      render() {
          return <form onSubmit={this.props.onSubmit}>
                <input type="text" 
                placeholder="Long Uri" 
                value={this.props.longUri} 
                onChange={this.props.onLongUriChange}/>
           <input type="submit" value="Short Uri" />
        </form>;
    }
}

module.exports = LongUriForm;

