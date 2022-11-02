import styles from "../cases/case.module.css";
import CustomCode from "../customcode/customcode";
import Images from "./images";

function Descriptions({ Desc }) {
  return <p className="bodyMD">{Desc}</p>;
}

function Items({ Work, Item, i }) {
  return (
    <div
      style={Item.bgcolor && { background: Item.bgcolor }}
      className={styles.item}
    >
      <div
        className={styles.images}
        // If there's no bgcolor we want to add padding because image is probably full width
      >
        {/* images of the item */}
        {Item.images.map((img, i) =>
          // check for custom code tag > insert custom code ;)
          Item.tag ? (
            <CustomCode tag={Item.tag} />
          ) : (
            <Images Item={Item} Img={img} key={i} Vid={Item.Vid} />
          )
        )}
      </div>
    </div>
  );
}

export default function Case({ Work }) {
  return (
    // Apply custom text color
    <div
      style={Work.bgcolor ? { color: "#DFDFDF", background: Work.bgcolor } : {}}
    >
      <div className="content">
        <div className={styles.header}>
          <p className="bodyMD">
            {Work.client}
            {Work.url && (
              <a className="link" href={Work.url} target="_blank">
                {Work.link}
              </a>
            )}
          </p>
          <h1 className="headingL weightMedium">{Work.title}</h1>
          <div className={styles.contributors}>
            {Work.description.map((desc, i) => (
              <Descriptions Desc={desc.text} key={i} />
            ))}
          </div>
        </div>
        <div className={styles.items}>
          {Work.items.map((item, i) => (
            <Items Work={Work} Item={item} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
