import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Controls from '../components/video-player-controls'
import FormattedTime from '../../utils/utils'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import {connect} from 'react-redux'

class VideoPlayer extends Component {
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        volume:0.5,
        lastVolume: 0
    }

    togglePlay = (event) => {
        this.setState({
            pause: !this.state.pause
        })
    }

    componentDidMount() {
        this.setState({
            pause: (!this.props.autoPlay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target
        this.setState({
            duration: this.video.duration
        })
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        this.video.currentTime = event.target.value
    }

    handleSeeking = event => {
        this.setState({
            loading: true
        })
    }

    handleSeeked = event => {
        this.setState({
            loading: false
        })
    }

    handleVolumeChange = event => {
        this.video.volume = event.target.value
    }

    handleToggleVolume = event => {
        this.setState({
            lastVolume: this.state.volume,
            volume: this.state.volume ===0 ? this.state.lastVolume : 0
        })
        
        this.video.volume = this.state.lastVolume
    }

    handleFullScreenClick = event => {
        if (!document.webkitIsFullScreen) {
            this.player.webkitRequestFullScreen()
        } else {
            document.webkitExitFullscreen()
        }
    }

    setRef = element => {
        this.player = element
    }

    render() {
        return (
            <VideoPlayerLayout
                setRef={this.setRef}
            >
                <Title 
                    title = {this.props.media.get('title')}
                />
                <Controls>
                    <PlayPause 
                        pause = {this.state.pause}
                        handleClick = {this.togglePlay}
                    />
                    <Timer 
                        duration={FormattedTime(this.state.duration)}
                        currentTime={FormattedTime(this.state.currentTime)}
                    />
                    <ProgressBar
                        duration={this.state.duration} 
                        value = {this.state.currentTime}
                        handleProgressChange = {this.handleProgressChange}
                    />
                    <Volume 
                        handleVolumeChange={this.handleVolumeChange}
                        handleToggleVolume={this.handleToggleVolume}
                    />
                    <FullScreen
                        handleFullScreenClick={this.handleFullScreenClick}
                    />
                </Controls>
                <Spinner
                    active={this.state.loading}
                />
                <Video
                    autoPlay={this.props.autoPlay}
                    pause={this.state.pause}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    src={this.props.media.get('src')}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps(state, props) {
    return {
        media: state.get('data').get('entities').get('media').get(props.id)
    }
}

export default connect(mapStateToProps)(VideoPlayer)