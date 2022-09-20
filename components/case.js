import styles from "../components/case.module.css";

function Descriptions({ Desc }) {
  return <p className="bodyMD">{Desc}</p>;
}

function Items({ Item, i }) {
  return (
    <div
      style={Item.bgcolor ? { background: Item.bgcolor } : {}}
      className={styles.item}
    >
      <div
        className={styles.images}
        // If there's no bgcolor we want to add padding because image is probably full width
        style={Item.bgcolor ? { padding: "0 7.5rem" } : {}}
      >
        {/* images of the item */}
        {Item.images.map((img, i) => (
          <img
            src={img.img}
            width={Item.width ? Item.width : "100%"}
            style={
              Item.bordercolor ? { border: "1px solid" + Item.bordercolor } : {}
            }
          />
        ))}
      </div>
      <p>{Item.caption}</p>
    </div>
  );
}

export default function Case({ Work }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p className="bodyMD">{Work.client}</p>
        <h1 className="headingL weightMedium">{Work.title}</h1>
        <div className={styles.contributors}>
          {Work.description.map((desc, i) => (
            <Descriptions Desc={desc.text} key={i} />
          ))}
        </div>
      </div>
      <div className={styles.items}>
        {Work.items.map((item, i) => (
          <Items Item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
