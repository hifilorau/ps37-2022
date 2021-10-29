


const MetaInfo = ({meta}) => {
  console.log('META', meta)
  return (
    <div className="nft-fo meta-fo">
      <div className="meta-item">
        <div className="meta-label">Plane:</div>
        <div className="meta-value">{meta.theme}</div>
      </div>
      {meta.logo && <div className="meta-item">
        <div className="meta-label">Logo:</div>
        <div className="meta-value">{meta.logo}</div>
      </div> }
      <div className="meta-item">
        <div className="meta-label">Moons:</div>
        <div className="meta-value">{meta.moons}</div>
      </div>
      <div className="meta-item">
        <div className="meta-label">Mountains:</div>
        <div className="meta-value">{meta.mountains}</div>
      </div>
      <div className="meta-item">
        <div className="meta-label">Sun:</div>
        <div className="meta-value">{meta.sun ? "Yes" : "No"}</div>
      </div>
    </div>
  )
}

export default MetaInfo