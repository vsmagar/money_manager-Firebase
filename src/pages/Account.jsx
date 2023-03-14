import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addIncomeAction, getIncomeAction } from "../redux/action/incomeAction";
import { toast } from "react-toastify";
import {
  addExpenceAction,
  getExpenceAction,
} from "../redux/action/expenceAction";
export default function Account() {
  const actionDispatch = useDispatch();
  const { incomeAdded, error, getIncome } = useSelector(
    (state) => state.income
  );

  const {
    expenceAdded,
    expence,
    error: expenceError,
  } = useSelector((state) => state.expence);

  const formik = useFormik({
    initialValues: {
      remark: "Food Money",
      amount: 100,
      choice: "income",
    },
    validationSchema: yup.object({
      remark: yup
        .string()
        .required("Please Enter Somehting")
        .min(2, "Please Enter 2 or more chars"),
      amount: yup.string().required("please Enter Some Amount"),
      choice: yup.string().required("choice can't be null"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      if (values.choice === "income") {
        actionDispatch(addIncomeAction(values));
      }
      if (values.choice === "expense") {
        actionDispatch(addExpenceAction(values));
      } else {
        toast.error("Invalide Choice");
      }
    },
  });
  // console.log(getIncome);

  useEffect(() => {
    actionDispatch(getExpenceAction());
    actionDispatch(getIncomeAction());

    incomeAdded && toast.success("InCome Added Successfully");
    error && toast.error("Something Went Wrong");

    expenceAdded && toast.success("Expence Added Successfully");
    expenceError && toast.error("Something Went Wrong");
  }, [incomeAdded, error, expenceAdded, expenceError]);

  return (
    <form onSubmit={formik.handleSubmit}>
      {/* {JSON.stringify(getIncome)} */}
      <div className="container my-4">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-header text-center">Account</div>
              <div className="card-body">
                <div>
                  <label for="remark" className="form-label">
                    Remark
                  </label>
                  <input
                    name="remark"
                    type="text"
                    className={`form-control ${
                      formik.errors.remark && "is-invalid"
                    }`}
                    id="remark"
                    placeholder="for e.g food money"
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                  />
                  <span className="invalid-feedback">
                    {formik.errors.remark}
                  </span>
                </div>
                <div className="mt-2">
                  <label for="amount" className="form-label">
                    Amount
                  </label>
                  <input
                    name="amount"
                    type="number"
                    className={`form-control ${
                      formik.errors.amount && "is-invalid"
                    }`}
                    id="amount"
                    placeholder="Enter the Amount"
                    value={formik.values.amount}
                    onChange={formik.handleChange}
                  />
                  <span className="invalid-feedback">
                    {formik.errors.amount}
                  </span>
                </div>
                <div className="mt-2">
                  <label for="choice" className="form-label">
                    Income/Expense
                  </label>
                  <select
                    value={formik.values.choice}
                    onChange={formik.handleChange}
                    className={`form-select ${
                      formik.values.choice == "null" && "is-invalid"
                    }`}
                    name="choice"
                  >
                    <option value="null"></option>
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                  </select>
                  <span className="invalid-feedback">
                    {formik.errors.choice}
                  </span>
                </div>
                <button type="submit" className="btn btn-primary w-100 mt-3">
                  Add
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <div class="card-header text-light bg-danger">
                <h5>Expence</h5>
                Total:{" "}
                {expence && (
                  <>
                    {expence.length > 0
                      ? expence.reduce((total, item) => total + item.amount, 0)
                      : 0}
                  </>
                )}
              </div>
              <div class="card-body">
                {expence && (
                  <>
                    {expence.map((item, index) => (
                      <div
                        className=" d-flex justify-content-between align-items-center my-2"
                        key={index}
                      >
                        <p>{item.remark}</p>
                        <strong className="text-success">{item.amount}</strong>
                        <hr />
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div class="card">
              <div class="card-header text-light bg-success">
                <p>Income</p>
                <h5>
                  {getIncome && (
                    <>
                      Total :{" "}
                      {getIncome.length > 0
                        ? getIncome.reduce(
                            (total, item) => total + item.amount,
                            0
                          )
                        : 0}
                    </>
                  )}
                </h5>
              </div>
              <div class="card-body">
                {getIncome &&
                  getIncome.map((item, index) => (
                    <div
                      className=" d-flex justify-content-between align-items-center my-2"
                      key={index}
                    >
                      <p>{item.remark}</p>
                      <strong className="text-success">{item.amount}</strong>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
