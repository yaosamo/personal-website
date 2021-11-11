import IconsCSS from "../components/icons.module.css";

export default function IconsModule(props) {
  return (
    <div className={IconsCSS.icon}>
      <img src={props.icon.url} />
      <p>{props.icon.name}</p>
    </div>
  );
}
