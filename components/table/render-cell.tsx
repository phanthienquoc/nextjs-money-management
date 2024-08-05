import { User, Tooltip, Chip, Modal, ModalContent, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import React, { useState } from "react";
// import { DeleteIcon } from "../icons/table/delete-icon";
// import { EditIcon } from "../icons/table/edit-icon";
import { EyeIcon } from "../icons/table/eye-icon";
import { transactions } from '../accounts/data.json'
interface Props {
  transaction: (typeof transactions)[number];
  columnKey: string | React.Key;
}

export const RenderCell = ({ transaction, columnKey }: Props) => {
  // @ts-ignore
  const cellValue = transaction[columnKey];

  const _handleViewTransactionDetail = (transaction: (typeof transactions)[number]) => {
    console.log("View transaction", transaction)
  }

  const onClose = () => {
  }

  switch (columnKey) {
    case "initiatedBy":
      return (
        <User
          avatarProps={{
            src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
          }}
          name={cellValue}
        >
          {transaction.initiatedBy}
        </User>
      );
    case "status":
      return (
        <Chip
          size="sm"
          variant="flat"
          color={
            cellValue === "active"
              ? "success"
              : cellValue === "paused"
                ? "danger"
                : "warning"
          }
        >
          <span className="capitalize text-xs">{cellValue}</span>
        </Chip>
      );

    case "actions":
      return (
        <div className="flex items-center gap-4 ">
          <div>
            <Tooltip content="Details">
              <button onClick={() => _handleViewTransactionDetail(transaction)}>
                <EyeIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          {/* <div>
            <Tooltip content="Edit user" color="secondary">
              <button onClick={() => console.log("Edit user", user.id)}>
                <EditIcon size={20} fill="#979797" />
              </button>
            </Tooltip>
          </div>
          <div>
            <Tooltip
              content="Delete user"
              color="danger"
              onClick={() => console.log("Delete user", user.id)}
            >
              <button>
                <DeleteIcon size={20} fill="#FF0080" />
              </button>
            </Tooltip>
          </div> */}
        </div>
      );
    default:
      return cellValue;
  }
};
