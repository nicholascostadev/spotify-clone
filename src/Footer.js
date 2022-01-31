import './Footer.css';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import RepeatIcon from '@mui/icons-material/Repeat';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import { Grid, Slider } from '@mui/material';
import {
	FavoriteBorder,
	PlayCircleFilled,
	RemoveCircleOutline,
} from '@mui/icons-material';

function Footer() {
	return (
		<div className="footer">
			<div className="footer__left">
				<img
					className="footer__albumLogo"
					src="https://i.scdn.co/image/ab67616d00004851a389174f8f9987c23deba02b"
					alt=""
				/>
				<div className="footer__songInfo">
					<h4>Song Name</h4>
					<p>Author</p>
				</div>
				<div className="footer__songReactions">
					<FavoriteBorder />
					<RemoveCircleOutline />
				</div>
			</div>
			<div className="footer__center">
				<ShuffleIcon className="footer__green" />
				<SkipPreviousIcon className="footer__icon" />
				<PlayCircleFilled fontSize="large" className="footer__icon" />
				<SkipNextIcon className="footer__icon	" />
				<RepeatIcon className="footer__green" />
			</div>
			<div className="footer__right">
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlayIcon />
					</Grid>
					<Grid item>
						<VolumeDownIcon />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby="continuous-slider" />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
