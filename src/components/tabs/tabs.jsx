import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			activeTab: 0,
		};
		this.tabClickHandler = this.tabClickHandler.bind(this);
	}

	tabClickHandler(i) {
		this.setState({activeTab: i});
	}

	render() {
		const {activeTab} = this.state;
		const {
			description,
			director,
			genre,
			id,
			name,
			rating,
			released,
			starring,
			backgroundColor,
			backgroundImage,
			isFavorite,
			posterImage,
			previewImage,
			previewVideoLink,
			runTime,
			scoresCount,
			videoLink,
		} = this.props.movieData;
		return (
			<div className="movie-card__desc">
				<nav className="movie-nav movie-card__nav">
					<ul className="movie-nav__list">
						{['Overview', 'Details', 'Reviews'].map((item, i) => (
							<li
								className={`movie-nav__item ${
									this.state.activeTab === i && `movie-nav__item--active`
								}`}
								key={`tab-${i}`}>
								<a
									href="#"
									className="movie-nav__link"
									onClick={(evt) => {
										evt.preventDefault();
										this.tabClickHandler(i);
									}}>
									{item}
								</a>
							</li>
						))}
					</ul>
				</nav>
				{activeTab === 0 && (
					<>
						<div className="movie-rating">
							<div className="movie-rating__score">{rating}</div>
							<p className="movie-rating__meta">
								<span className="movie-rating__level">Very good</span>
								<span className="movie-rating__count">{scoresCount}</span>
							</p>
						</div>

						<div className="movie-card__text">
							<p>{description}</p>

							<p className="movie-card__director">
								<strong>Director: {director}</strong>
							</p>

							<p className="movie-card__starring">
								<strong>Starring: {starring}</strong>
							</p>
						</div>
					</>
				)}
				{activeTab === 1 && (
					<div className="movie-card__text movie-card__row">
						<div className="movie-card__text-col">
							<p className="movie-card__details-item">
								<strong className="movie-card__details-name">Director</strong>
								<span className="movie-card__details-value">{director}</span>
							</p>
							<p className="movie-card__details-item">
								<strong className="movie-card__details-name">Starring</strong>
								<span className="movie-card__details-value">{starring}</span>
							</p>
						</div>

						<div className="movie-card__text-col">
							<p className="movie-card__details-item">
								<strong className="movie-card__details-name">Run Time</strong>
								<span className="movie-card__details-value">{runTime}</span>
							</p>
							<p className="movie-card__details-item">
								<strong className="movie-card__details-name">Genre</strong>
								<span className="movie-card__details-value">{genre}</span>
							</p>
							<p className="movie-card__details-item">
								<strong className="movie-card__details-name">Released</strong>
								<span className="movie-card__details-value">{released}</span>
							</p>
						</div>
					</div>
				)}
				{activeTab === 2 && (
					<div className="movie-card__reviews movie-card__row">
						<div className="movie-card__reviews-col">
							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										Discerning travellers and Wes Anderson fans will luxuriate in the glorious
										Mittel-European kitsch of one of the director's funniest and most exquisitely
										designed movies in years.
									</p>

									<footer className="review__details">
										<cite className="review__author">Kate Muir</cite>
										<time className="review__date" dateTime="2016-12-24">
											December 24, 2016
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">8,9</div>
							</div>

							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										Anderson's films are too precious for some, but for those of us willing to lose
										ourselves in them, they're a delight. "The Grand Budapest Hotel" is no
										different, except that he has added a hint of gravitas to the mix, improving the
										recipe.
									</p>

									<footer className="review__details">
										<cite className="review__author">Bill Goodykoontz</cite>
										<time className="review__date" dateTime="2015-11-18">
											November 18, 2015
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">8,0</div>
							</div>

							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										I didn't find it amusing, and while I can appreciate the creativity, it's an
										hour and 40 minutes I wish I could take back.
									</p>

									<footer className="review__details">
										<cite className="review__author">Amanda Greever</cite>
										<time className="review__date" dateTime="2015-11-18">
											November 18, 2015
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">8,0</div>
							</div>
						</div>
						<div className="movie-card__reviews-col">
							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										The mannered, madcap proceedings are often delightful, occasionally silly, and
										here and there, gruesome and/or heartbreaking.
									</p>

									<footer className="review__details">
										<cite className="review__author">Matthew Lickona</cite>
										<time className="review__date" dateTime="2016-12-20">
											December 20, 2016
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">7,2</div>
							</div>

							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										It is certainly a magical and childlike way of storytelling, even if the content
										is a little more adult.
									</p>

									<footer className="review__details">
										<cite className="review__author">Paula Fleri-Soler</cite>
										<time className="review__date" dateTime="2016-12-20">
											December 20, 2016
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">7,6</div>
							</div>

							<div className="review">
								<blockquote className="review__quote">
									<p className="review__text">
										It is certainly a magical and childlike way of storytelling, even if the content
										is a little more adult.
									</p>

									<footer className="review__details">
										<cite className="review__author">Paula Fleri-Soler</cite>
										<time className="review__date" dateTime="2016-12-20">
											December 20, 2016
										</time>
									</footer>
								</blockquote>

								<div className="review__rating">7,0</div>
							</div>
						</div>
					</div>
				)}
			</div>
		);
	}
}

Tabs.propTypes = {
	movieData: PropTypes.object.isRequired,
};
