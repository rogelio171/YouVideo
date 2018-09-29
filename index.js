import React from 'react'
import {render} from 'react-dom'
import Media from './src/playlist/components/media'

const app = document.getElementById('app')

render(<Media type="video" title="What is responsive design?" author="Steve Rogers" image="./images/covers/responsive.jpg" />, app)