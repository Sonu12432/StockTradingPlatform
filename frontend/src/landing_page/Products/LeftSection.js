import React from "react";

function LeftSection({
  imageUrl,
  prodTitle,
  prodDescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div class="container m-5 p-4">
      <div class="row p-4 m-5">
        <div class="col-8">
          <img src={imageUrl} alt="leftImageUrl" class="" style={{width:"85%", paddingLeft:"30px"}}/>
        </div>

        <div class="col-4 mt-5" style={{fontSize:"1.1rem"}}>
          <div>
            <h2>{prodTitle}</h2>
            <p class="text-muted">{prodDescription}</p>
          </div>
          <div class="mt-4">
            <a
              href={tryDemo}
              className=""
              style={{ textDecoration: "none", marginRight: "8%" }}
            >
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div class="mt-4">
            <a
              href={playStore}
              className="w-2 h-5"
              style={{ marginRight: "4%" }}
            >
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;