import React, {Component} from 'react';
import {PlainPage} from "./PlainPage";

export class HowToDress extends Component {
  render() {
    return(
    <PlainPage>
      <h1 class="title">Dressing</h1>
      <p><span>During ILYMUN, delegates and members of the organizing team are expected to have a professional attitude. This should reflect in their clothing.&nbsp;</span></p>
      <p><span>Attendees are requested to wear appropriate attire. Here is some inspiration on what to wear: </span></p>
      <blockquote>
          <p><i><span>Clothes are never a frivolity: they always mean something.</span></i></p>
          <p><i><span> &nbsp;</span></i><span>~James Laver</span></p>
      </blockquote>
      <p><img class="aligncenter size-full wp-image-1536" src={require("./images/dresscode.jpg")} alt="" width="100%" height="auto" sizes="(max-width: 1920px) 100vw, 1920px" /></p>
      <p>&nbsp;</p>
    </PlainPage>
    );
  }
}