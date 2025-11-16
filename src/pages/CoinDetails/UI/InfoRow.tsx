import arounder from "../../../../helper/Arounder.ts";

const InfoRow = ({ label, value }: { label: string; value: number | null | undefined }) => {
    if (value == null) return null;
    return (
        <div className="border-b border-gray-200 py-2 flex justify-between">
            <span>{label}</span>
            <span>{arounder(value)}</span>
        </div>
    );
};

export default InfoRow;