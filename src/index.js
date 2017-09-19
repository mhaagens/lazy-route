import React, {Component} from 'react'

export default class LazyRoute extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loaded: false,
			showLoader: false
		}
	}
	componentDidMount() {
		this.loadComponent(this.props.component);
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.component !== this.props.component) {
			this.setState({ loaded: false });
			this.loadComponent(nextProps.component);
		}
	}
	loadComponent(componentPromise) {
		componentPromise.then((module) => {
			this.component = module.default;
			this.setState({ loaded: true });
		});
	}
	render() {
		const { loaded } = this.state
		if (loaded === true) {
			return <this.component {...this.props} />
		} else {
			return (<div />)
		}
	}
}