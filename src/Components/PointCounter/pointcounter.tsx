export default function PointCounter({ points=0 }) {
    return (
        <div>
            <main>
                <p><span>{points}</span> Points</p>
            </main>
        </div>
    );
}