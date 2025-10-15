import React from "react";

function RightSection({
  imageUrl,
  prodTitle,
  prodDescription,
  tryDemo,
  learnMore,
  playStore,
  appStore,
}) {
  return (
    <div class="container mt-5">
      <div class="row">
        <div class="col-5 p-5 mt-5" style={{fontSize:"1.1rem"}}>
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
              style={{ marginRight:"4%"}}
            >
              <img src="media/images/googlePlayBadge.svg" alt="googlePlay"/>
            </a>
            <a href={appStore} style={{}}>
              <img src="media/images/appstoreBadge.svg" alt="appStoreImg"/>
            </a>
          </div>
        </div>
        <div class="col-7">
          <img src={imageUrl} alt="rightImageUrl" class="" style={{width:"90%"}}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;

// import React from "react";

// function RightSection({ imageUrl, prodTitle, prodDesription, learnMore }) {
//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-6 p-5 mt-5">
//           <h1>{prodTitle}</h1>
//           <p>{prodDesription}</p>
//           <div>
//             <a href={learnMore}>Learn More</a>
//           </div>
//         </div>
//         <div className="col-6">
//           <img src={imageUrl} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default RightSection;