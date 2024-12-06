export default function ResetList({ onResetList }) {
  return (
    <div className="mt-3">
      <button
        type="button"
        onClick={onResetList}
        className="btn btn-danger w-100"
      >
        Reset List
      </button>
    </div>
  );
}
