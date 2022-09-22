import React, { useState } from "react";
import AppButton from "../Components/Forms/AppButton";
import AppInput from "../Components/Forms/AppInput";
import Form from "../Components/Forms/Form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { asyncCreateCustomerKhata } from "../Redux/Features/CustomerKhataSlice";

const AddKhata = () => {
  const dispatch = useDispatch();
  const [UploadData, setUploadData] = useState({
    customerName: "",
    fatherName: "",
    address: "",
    cnicNo: "",
    phoneNo1: "",
    phoneNo2: "",
    customerOccupation: "",
    customerPic: "",
    totalAmount: "",
    paidAmount: "",
    remainingAmount: "",
  });
  const {
    customerName,
    fatherName,
    address,
    cnicNo,
    phoneNo1,
    phoneNo2,
    customerOccupation,
    customerPic,
    totalAmount,
    paidAmount,
    remainingAmount,
  } = UploadData;
  console.log(customerPic);
  const onSubmit = async (e) => {
    const fd = new FormData();

    fd.append("customerName", customerName);
    fd.append("fatherName", fatherName);
    fd.append("address", address);
    fd.append("cnicNo", cnicNo);
    fd.append("phoneNo1", phoneNo1);
    fd.append("phoneNo2", phoneNo2);
    fd.append("customerOccupation", customerOccupation);
    fd.append("image", customerPic);
    fd.append("totalAmount", 0);
    fd.append("paidAmount", 0);
    fd.append("remainingAmount", 0);

    dispatch(asyncCreateCustomerKhata({ fd, toast }));
    setUploadData({
      customerName: "",
      fatherName: "",
      address: "",
      cnicNo: "",
      phoneNo1: "",
      phoneNo2: "",
      customerOccupation: "",
      customerPic: "",
      totalAmount: "",
      paidAmount: "",
      remainingAmount: "",
    });
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <Form style={"gap-4"}>
        <AppInput
          placeholder={"customerName"}
          value={UploadData.customerName}
          type="text"
          onChange={(e) =>
            setUploadData({ ...UploadData, customerName: e.target.value })
          }
        />
        <AppInput
          placeholder={"fatherName"}
          value={UploadData.fatherName}
          type="text"
          onChange={(e) =>
            setUploadData({ ...UploadData, fatherName: e.target.value })
          }
        />
        <AppInput
          placeholder={"address"}
          value={UploadData.address}
          type="text"
          onChange={(e) =>
            setUploadData({ ...UploadData, address: e.target.value })
          }
        />
        <AppInput
          placeholder={"cnicNo"}
          value={UploadData.cnicNo}
          type="number"
          onChange={(e) =>
            setUploadData({ ...UploadData, cnicNo: e.target.value })
          }
        />
        <AppInput
          placeholder={"phoneNo1"}
          value={UploadData.phoneNo1}
          type="number"
          onChange={(e) =>
            setUploadData({ ...UploadData, phoneNo1: e.target.value })
          }
        />
        <AppInput
          placeholder={"phoneNo2"}
          value={UploadData.phoneNo2}
          type="number"
          onChange={(e) =>
            setUploadData({ ...UploadData, phoneNo2: e.target.value })
          }
        />
        {/* <input type="text" onChange={(e)=>setUploadData(e.target.files[0])} /> */}
        <AppInput
          placeholder={"customerOccupation"}
          value={UploadData.customerOccupation}
          type="text"
          onChange={(e) =>
            setUploadData({
              ...UploadData,
              customerOccupation: e.target.value,
            })
          }
        />
        {/* when u sent file never use value attribu te in input element */}
        <AppInput
          placeholder={"image"}
          type="file"
          onChange={(e) =>
            setUploadData({ ...UploadData, customerPic: e.target.files[0] })
          }
        />
        {/* <AppInput
          placeholder={"remainingAmount"}
          value={UploadData.remainingAmount}
          type="number"
          onChange={(e) =>
            setUploadData({
              ...UploadData,
              remainingAmount: e.target.value,
            })
          }
        /> */}
        <AppButton style={"bg-blue-700 hover:bg-blue-600"} onClick={onSubmit}>
          Add
        </AppButton>
      </Form>
    </div>
  );
};

export default AddKhata;
