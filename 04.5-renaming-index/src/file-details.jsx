import { useLocation } from "@solidjs/router";

export default function FileDetails(props) {
  const location = useLocation();
  return (
    <>
      <div class="filename">
        <div>file:</div>
        <code>{props.file}</code>
      </div>
      <div class="filename">
        route: <code>{location.pathname}</code>
      </div>
    </>
  );
}
