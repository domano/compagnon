export default function Tile (props) {
    return <div className="rounded-lg m-1 bg-white shadow">
        {props.children}
    </div>
}