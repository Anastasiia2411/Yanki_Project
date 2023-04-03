import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import {
    FormBackground,
    FormContainer,
    Input,
    InputWrapper,
    FormHeader,
    Label,
    CloseButtonWrapper,
    TextError,
    SubmitButton,
    PatternForm,
} from "./Form.style";
import {
    CloseFormModal,
    sendDataAboutUsers,
    sendDataAboutBuyProduct,
    clearTheArrayOfBuyProducts
} from "../../store/actions";

export function BuysForm() {
    const dispatch = useDispatch();

    const buyProductsData = useSelector(state => state.buy.purchases);

    const handleCloseBuyFormModal = () => {
        dispatch(CloseFormModal());
    };
    const handleCloseBuyFormModalAndSendData = (usersData, buyProductsData) => {
        console.log("Products:", ...buyProductsData);
        console.log("Data about user:", usersData);
        dispatch(sendDataAboutBuyProduct(buyProductsData));
        dispatch(sendDataAboutUsers(usersData));
        dispatch(clearTheArrayOfBuyProducts());
        dispatch(CloseFormModal());
    };

    return (
        <FormContainer onClick={() => {
            handleCloseBuyFormModal();
        }}>
            <FormBackground onClick={(e) => {
                e.stopPropagation();
            }}>
                <CloseButtonWrapper onClick={handleCloseBuyFormModal}>
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12.5 9.72266L22.2227 0L25 2.77734L15.2773 12.5L25 22.2227L22.2227 25L12.5 15.2773L2.77734 25L0 22.2227L9.72266 12.5L0 2.77734L2.77734 0L12.5 9.72266Z"
                            fill="#E0BEA2"/>
                    </svg>
                </CloseButtonWrapper>
                <div>
                    <FormHeader>Заповніть форму для купівлі товару</FormHeader>
                    <Formik initialValues={{
                        name: "",
                        secondName: "",
                        age: "",
                        address: "",
                        tel: "",
                    }} validationSchema={
                        Yup.object(
                            {
                                name: Yup.string().matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/, "Дозволені лише літери").min(2, "Занадто коротке ім'я!").max(150, "Дуже довге ім'я!").required("Обов'язкове поле"),
                                secondName: Yup.string().matches(/^[A-Za-zА-Яа-яІіЇїЄєҐґ]+$/, "Дозволені лише літери").min(2, "Занадто коротке прізвище!").max(150, "Дуже довге прізвище!").required("Обов'язкове поле"),
                                age: Yup.number().typeError("Тут повинно бути число").required("Обов'язкове поле").positive("ви не можете заповнювати форму ще не народившись").integer("тільки цілі числа").max(150, "Люді стільки не живуть"),
                                address: Yup.string().max(400, "Дуже довга адреса!").required("Обов'язкове поле"),
                                tel: Yup.string().required("Обов'язкове поле").matches(/^\+\(\d{3}\) \d{3}-\d{3}-\d{3}$/, "Некоректний номер телефону"),
                            }
                        )} onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            handleCloseBuyFormModalAndSendData(values, buyProductsData);
                            setSubmitting(false);
                        }, 400);
                    }
                    }>
                        {
                            formikProps =>
                                (
                                    <InputWrapper>
                                        <Label htmlFor="name">Ім'я</Label>
                                        <Input placeholder="Введіть Ваше ім'я"
                                               border={formikProps.touched.name && formikProps.errors.name && "1px solid red"}
                                               id="name"
                                               name={"name"} error={formikProps.errors.name} type="text"/>
                                        <ErrorMessage name="name" component={TextError}/>

                                        <Label htmlFor="second-name">Прізвище</Label>
                                        <Input placeholder="Введіть Ваше прізвище"
                                               border={formikProps.touched.secondName && formikProps.errors.secondName && "1px solid red"}
                                               id="second-name" name="secondName" type="text"/>
                                        <ErrorMessage name="secondName" component={TextError}/>

                                        <Label htmlFor="age">Вік</Label>
                                        <Input id="age" placeholder="Введіть Ваш вік"
                                               border={formikProps.touched.age && formikProps.errors.age && "1px solid red"}
                                               name="age"
                                               type="text"/>
                                        <ErrorMessage name="age" component={TextError}/>

                                        <Label htmlFor="address">Адреса доставки</Label>
                                        <Input id="address" placeholder="Введіть Вашу адресу"
                                               border={formikProps.touched.address && formikProps.errors.address && "1px solid red"}
                                               name="address" type="text"/>
                                        <ErrorMessage name="address" component={TextError}/>

                                        <Label htmlFor="tel">Мобільний телефон</Label>
                                        <Field name="tel">
                                            {({ field }) => (
                                                <PatternForm
                                                    {...field}
                                                    id="tel"
                                                    name="tel"
                                                    format="+(###) ###-###-###"
                                                    mask="_"
                                                    allowEmptyFormatting
                                                    onValueChange={(values) => {
                                                        formikProps.setFieldValue("tel", values.value);
                                                    }}
                                                />
                                            )}
                                        </Field>
                                        <ErrorMessage name="tel" component={TextError}/>

                                        <SubmitButton type="submit"
                                                      disabled={formikProps.isSubmitting}>Відправити</SubmitButton>
                                    </InputWrapper>
                                )
                        }
                    </Formik>

                </div>
            </FormBackground>
        </FormContainer>
    );
}
