// From NDC in the News
// We use this style a lot for news pieces
// May want to be able to use non news items i.e. manually assign -- think about the use cases
// Could do a true/false for if it is pulling data from a news source then have the same styles set up for both but if it is true
// it uses the page grid section otherwise, it uses the custom section?
// Right now on the NDC page, it is manually coded in.
// Main parts: Card with blue border top
// headline with link to article
// date and author

// I may be over thinking this due to a brain fart, come back to this
// Found a similar item with an additional smaller blurb and a link on the Our Technology page
// the other one was col-6 while these are col-4 so think of flexibility in use -- potentially have it go by rows or indicate the number of items you want. 
// potentially a calculation based on how many cols i.e.: if you only want 2 in a row put in 2 and the component in here will do 12/{this.props.colNum} which should be 6

{/* <div class="page-grid__content">
    <div class="page-grid__items page-grid__items--expanded">
      <div class="page-grid__row page-grid__row--3 clearfix" data-page-grid="row">
        <div class="content-block--pageItem" style="height: 250px">
          <div data-grid-content="insideContent" class="content-block--pageItem__inside">
            <div class="content-block--pageItem__title">
              <a href="https://www.travelnewsasia.com/news21/712-NDCAmericanAirlines.shtml" target="_blank" title="American Airlines to Complete Amadeus NDC Integration in North America in Early 2022 " class="ctaLink">American Airlines to Complete Amadeus NDC Integration in North
                America in Early 2022</a>
            </div>
            <ul class="content-block--pageItem__body" style="margin: unset">
              <li>December 7, 2021 · <b>Travel News Asia</b></li>
            </ul>
          </div>
        </div>

        <div class="content-block--pageItem" style="height: 250px">
          <div data-grid-content="insideContent" class="content-block--pageItem__inside">
            <div class="content-block--pageItem__title">
              <a href="https://www.phocuswire.com/Skepticsm-over-IATA-shift-NDC-certification" target="_blank" title="Skepticism emerges over IATA’s shift away from NDC certification" class="ctaLink">Skepticism emerges over IATA’s shift away from NDC
                certification</a>
            </div>
            <ul class="content-block--pageItem__body" style="margin: unset">
              <li>November 30, 2021 · <b>PhocusWire</b></li>
            </ul>
          </div>
        </div>

        <div class="content-block--pageItem" style="height: 250px">
          <div data-grid-content="insideContent" class="content-block--pageItem__inside">
            <div class="content-block--pageItem__title">
              <a href="https://www.phocuswire.com/collaboration-how-we-can-overcome-barriers-to-ndcs-success" target="_blank" title="Collaboration: how we can overcome barriers to NDC's success" class="ctaLink">Collaboration: how we can overcome barriers to NDC's success</a>
            </div>
            <ul class="content-block--pageItem__body" style="margin: unset">
              <li>November 12, 2021 · <b>PhocusWire</b></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div> */}