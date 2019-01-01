import * as React from 'react';

import profile_pic from '../images/mattguitar.jpg'

import { Resume } from './resume';

export const Home = () => <div>
    <h1>Matt's personal website</h1>
    <img src={profile_pic} />
    <Resume />
</div>