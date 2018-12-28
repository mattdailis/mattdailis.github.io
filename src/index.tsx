import * as React from 'react';
import { render } from 'react-dom';

import profile_pic from '../images/mattguitar.jpg'

render(<div><h1>Matt's personal website</h1><img src={profile_pic} /></div>, document.getElementById("root"));
