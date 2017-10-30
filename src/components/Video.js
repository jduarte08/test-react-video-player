import React, { Component } from 'react';
import filevideo from './../images/mov_bbb.mp4';
import toysvideo from './../images/toystory.mp4';

export default class Video extends Component {
    constructor() {
        super();
        this.state = {
            videos:[filevideo, toysvideo],
            currentVideo: 0,
            videoStatus: false,
            btnAction: 'Play',

        };
        this.style = {
            videoSize: {
                display: 'block',
                width: '640px',
                height: '360px',
                margin: 'auto',
            },
            btnSize: {
                padding: '5px 10px',
            },
        };
    }

    _playpauseVideo () {
        if(this.state.videoStatus === false) {
            this.refs.vidRef.play();
            this.setState({
                videoStatus: true,
                btnAction: 'Pause',
            })
        } else {
            this.refs.vidRef.pause();
            this.setState({
                videoStatus: false,
                btnAction: 'Play'
            });
        }
    }
    _prevnextVideo () {
        this.refs.vidRef.pause();
        this.setState({
            videoStatus: false,
            btnAction: 'Play'
        })
        if ((this.state.videos.length)-1 > this.state.currentVideo ) {
            this.setState({
                currentVideo: this.state.currentVideo + 1,
            });
        } else  if ((this.state.videos.length)-1 < this.state.currentVideo ) {
            this.setState({
                currentVideo: this.state.currentVideo - 1,
            });
        } else  if ((this.state.videos.length)-1 === this.state.currentVideo ) {
            this.setState({
                currentVideo: 0,
            }); 
        } else {
            this.setState({
                currentVideo: (this.state.videos.length)-1,
            }); 
        }
    }

    

    render () {
        return (
            <div className="video-wrapper">
                <video style={this.style.videoSize} ref="vidRef" src={this.state.videos[this.state.currentVideo]} type="video/mp4"></video>
                <div>
                    <button style={this.style.btnSize} onClick={this._prevnextVideo.bind(this)}>Previous</button>
                    <button style={this.style.btnSize} onClick={this._playpauseVideo.bind(this)}>{this.state.btnAction}</button>
                    <button style={this.style.btnSize} onClick={this._prevnextVideo.bind(this)}>Next</button>
                </div>
            </div>
        );
    }
}
