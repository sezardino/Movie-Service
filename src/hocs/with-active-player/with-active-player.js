import React, {PureComponent} from 'react';
import withPlayer from '../with-player/with-player';
import Player from '../../components/player/player.jsx';

const PlayerWrapped = withPlayer(Player);

const withActivePlayer = (Component) => {
	class WithActivePlayer extends PureComponent {
		constructor(props) {
			super(props);
			this.state = {
				activePlayer: -1,
			};
			this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
			this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
		}

		mouseEnterHandler(i) {
			this.setState({activePlayer: i});
		}

		mouseLeaveHandler() {
			this.setState({activePlayer: -1});
		}

		render() {
			return (
				<Component
					{...this.props}
					onCardMouseEnter={this.mouseEnterHandler}
					onCardMouseLeave={this.mouseLeaveHandler}
					renderPlayer={(it, i) => {
						const isPlaying = i === this.state.activePlayer;
						return <PlayerWrapped movie={it} isPlaying={isPlaying} />;
					}}
				/>
			);
		}
	}
	return WithActivePlayer;
};

export default withActivePlayer;
