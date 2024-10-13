import React, { useEffect } from "react";
import CardFunctionLabeledItem from "@/components/card-function-labeled-item";
import CopyButton from "@/components/common/copy-button";
import { useAppDispatch, useAppSelector } from "@/store/store-hooks";
import { setRoomId } from "@/state/globalsSlice";
import { generateRandomRoomId } from "@/lib/utils";

const CardFunctionRoomId: React.FC = (): JSX.Element => {
  const roomId = useAppSelector((state) => state.global.roomId);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setRoomId(generateRandomRoomId()));
  }, []);

  return (
    <CardFunctionLabeledItem label="Current room ID">
      <div className="flex items-center justify-center gap-2 bg-[#111216] px-2 py-1 rounded-lg">
        <span className="text-sm">
          {roomId ? roomId : "Generating room ID..."}
        </span>
        <CopyButton content={roomId || ""} />
      </div>
    </CardFunctionLabeledItem>
  );
};
export default CardFunctionRoomId;
