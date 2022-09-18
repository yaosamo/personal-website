import styles from "../components/case.module.css";

function Descriptions({ Desc }) {
  return <p className="bodyMD">{Desc}</p>;
}

function Item({ Item }) {
  return (
    <div
      style={Item.addbg ? { background: Item.bgcolor } : {}}
      className={styles.item}
    >
      <div className={styles.images}>
        {/* if border? add border color */}
        <img
          style={{ border: "1px " + Item + " solid" }}
          width="390"
          height="844"
        />
      </div>
      <p>Title</p>
    </div>
  );
}

export default function Case({ Work }) {
  const addborder = true;
  const bordercolor = "#c65431";
  const backgroundcolor = "#f4f5f6";

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
          <Item Item={item} key={i} />
        ))}
      </div>
    </div>
  );
}
