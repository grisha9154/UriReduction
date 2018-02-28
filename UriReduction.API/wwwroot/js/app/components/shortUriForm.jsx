const React =require('react');

class ShortUriForm extends React.Component{
    render(){
        return <div>
            <input id="post-shortlink" defaultValue={this.props.shortUri} />
            <button class="button" id="copy-button" data-clipboard-target="#post-shortlink">Copy</button>
            </div>
    }
}

module.exports = ShortUriForm;