import styles from "../cases/case.module.css";
import CustomCode from "../customcode/customcode";
import Images from "./images";

function Descriptions({ Desc }) {
  return <p className="bodyMD">{Desc}</p>;
}

function Items({ Work, Item, i }) {
  return (
    <div
      style={
        // if item has no bg - it's full width image and it doesn't need top and bottom padding
        Item.bgcolor ? { background: Item.bgcolor } : { padding: "3.5rem 0" }
      }
      className={styles.item}
    >
      <div
        className={styles.images}
        // If there's no bgcolor we want to add padding because image is probably full width
        style={Item.bgcolor ? { padding: "0 7.5rem" } : {}}
      >
        {/* images of the item */}
        {Item.images.map((img, i) =>
          // check for custom code > insert custom code ;)
          Item.tag ? (
            <CustomCode tag={Item.tag} />
          ) : (
            <Images Item={Item} Img={img} key={i} />
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
