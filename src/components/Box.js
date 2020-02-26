import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

//styles
import '../styles/box.css';

export default function Box(props) {
  return (
    <div className="box">
        <div className="thumb">
            <img draggable="false" width="100%" src={props.anime.thumb} alt="" />
        </div>
        <div className="content">
            <div className="title">
                Episódio {props.anime.epi} 
            </div>
            <div className={'buttons'}>
                <button className="d_btn" onClick={() => props.create_downloadable_btn(props.anime.epi, props.anime.uri)}>Download</button>
                {props.anime.download}
                {
                    props.anime.loading
                    ? <CircularProgress color="secondary" size={25}/>
                    : null
                }
            </div>
        </div>
    </div>
  );
}
