"use strict";
(self["webpackChunk_1win_frontend_main"] = self["webpackChunk_1win_frontend_main"] || []).push([
    [76361], {
        789193: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => wn
            });
            var i = n(166252),
                o = n(3577),
                s = n(749963);
            const a = ["innerHTML"],
                r = {
                    key: 0
                },
                l = ["innerHTML"];

            function u(t, e, n, u, d, c) {
                const p = (0, i.up)("ModalAsidePaymentSelect"),
                    m = (0, i.up)("NoPaymentsPage"),
                    h = (0, i.up)("VButton"),
                    y = (0, i.up)("DepositPaymentsGroup"),
                    g = (0, i.up)("DepositInstructionDesktop"),
                    C = (0, i.up)("DepositCustomPage"),
                    _ = (0, i.up)("DepositPeerToPeer"),
                    D = (0, i.up)("DepositMerchantIndia"),
                    f = (0, i.up)("DepositMerchantEazepeDesktopData"),
                    v = (0, i.up)("VLoader"),
                    w = (0, i.up)("PromoBannerIPL"),
                    k = (0, i.up)("Annotation"),
                    b = (0, i.up)("CardTypeSelect"),
                    A = (0, i.up)("BankCard"),
                    I = (0, i.up)("BankCardWalletOnly"),
                    M = (0, i.up)("VDynamicField"),
                    B = (0, i.up)("VInput"),
                    P = (0, i.up)("DepositModalAmount"),
                    S = (0, i.up)("AmountTags"),
                    O = (0, i.up)("VIcon"),
                    T = (0, i.up)("BillingVideoInstruction"),
                    $ = (0, i.up)("PaymentCopyright"),
                    F = (0, i.up)("DetailingButton"),
                    R = (0, i.up)("DepositUnifiedForm"),
                    q = (0, i.up)("DepositMoney"),
                    x = (0, i.up)("DepositHostToHost"),
                    E = (0, i.up)("QrCodeDepositInstructions"),
                    W = (0, i.up)("License"),
                    N = (0, i.up)("VModalWhite");
                return (0, i.wg)(), (0, i.j4)(N, {
                    "additional-title": c.additionalTitle,
                    "class-name": {
                        offline: t.offline
                    },
                    title: c.title,
                    subtitle: n.subtitle,
                    "not-scroll-body": "",
                    onClose: c.closeModal
                }, {
                    aside: (0, i.w5)((() => [(0, i.Wm)(p, {
                        ref: "modalAside",
                        "is-deposit": "",
                        value: t.card || t.paymentMethod,
                        cards: t.cards,
                        "payment-default-abbreviation": n.paymentDefaultAbbreviation,
                        "deposit-currency": t.depositCurrency,
                        "promo-cashier-visible": t.promoCashierStore.promoCashierVisible,
                        "is-active-withdrawals": c.isActiveWithdrawals,
                        "is-fetching-payments": t.isFetchingPayments,
                        "additional-currency-bonuses": n.additionalCurrencyBonuses,
                        onPaymentSelect: e[0] || (e[0] = t => c.onPaymentSelect(t, {
                            resetCard: !0
                        })),
                        onCardSelect: c.onCardSelect,
                        onClickOnPaymentMethod: c.clickOnPaymentMethod,
                        onClickOnRegionOpenButton: c.clickOnRegionOpenButton,
                        onClickOnRegionChangeButton: c.clickOnRegionChangeButton,
                        onActivateBonus: c.openModalIfSelectMethodWithoutBonus
                    }, null, 8, ["value", "cards", "payment-default-abbreviation", "deposit-currency", "promo-cashier-visible", "is-active-withdrawals", "is-fetching-payments", "additional-currency-bonuses", "onCardSelect", "onClickOnPaymentMethod", "onClickOnRegionOpenButton", "onClickOnRegionChangeButton", "onActivateBonus"])])),
                    footer: (0, i.w5)((() => [t.showResetFieldsDataButton ? ((0, i.wg)(), (0, i.j4)(h, {
                        key: 0,
                        class: (0, o.C_)(t.$style.resetRequiredDataButton),
                        "not-prevent": "",
                        theme: "grey",
                        onClick: t.resetFieldsData
                    }, {
                        default: (0, i.w5)((() => [(0, i.Wm)(O, {
                            icon: "arrow"
                        })])),
                        _: 1
                    }, 8, ["class", "onClick"])) : (0, i.kq)("", !0), (0, i.Wm)(W, {
                        "white-theme": "",
                        "show-apg-seal": !1,
                        dropdown: t.isBlockable
                    }, null, 8, ["dropdown"])])),
                    default: (0, i.w5)((() => {
                        var d, p, W, N, V, U, H, j, L, Z, z, G, K, Y, X;
                        return [t.isFetchingPayments || 0 !== t.cards.length ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(m, {
                            key: 0
                        })), t.paymentMethod || t.card ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                            key: 1
                        }, [t.showRedirectButton ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(t.$style.redirectButtonWrapper)
                        }, [(0, i._)("p", {
                            class: (0, o.C_)(t.$style.redirectButtonCaption)
                        }, (0, o.zw)(t.langCommon.deposit.redirectButton.caption), 3), (0, i.Wm)(h, {
                            theme: "green",
                            size: "lg",
                            onClick: c.onRedirectButtonClick
                        }, {
                            default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(t.langCommon.deposit.redirectButton.text), 1)])),
                            _: 1
                        }, 8, ["onClick"])], 2)) : t.showPaymentsGroup && !t.offline ? ((0, i.wg)(), (0, i.j4)(y, {
                            ref: "depositPaymentsGroup",
                            key: t.card.value,
                            value: t.paymentMethod,
                            card: t.card,
                            amount: t.amount,
                            "api-response": t.apiResponse,
                            "custom-messages": t.customMessages,
                            "amount-rules": t.amountRules,
                            currency: u.currentCurrency,
                            "button-enabled": c.buttonEnabled,
                            fetching: t.fetching,
                            "show-bank-card-payments": t.showBankCardPayments,
                            "is-current-payment-crypto": t.isCurrentPaymentCrypto,
                            "is-current-payment-india": t.isCurrentPaymentIndianBanks,
                            "initial-fields": t.initialFields,
                            "is-required-fields-valid": t.isRequiredFieldsValid,
                            "required-fields-data": t.requiredFieldsData,
                            "plain-required-field-descriptions": t.plainRequiredFieldDescriptions,
                            "header-hint": c.headerHint,
                            "is-activated-bonus": t.isActivatedBonus,
                            "limit-deposit-text": c.limitDepositText,
                            "deposit-id": t.depositId,
                            "default-amount": t.paymentAmountSnippet,
                            country: t.country,
                            annotation: t.annotation,
                            "notice-key": t.hostToHostNoticeKey,
                            "payment-session-id": t.paymentSessionId,
                            onInput: c.onPaymentSelect,
                            onOnFieldChange: t.onFieldChange,
                            onChangeApiResponse: c.changeApiResponse,
                            onCustomMessageCloseAmount: e[1] || (e[1] = e => t.clearCustomMessage("amountError")),
                            onCustomMessageAction: c.handleCustomMessageAction,
                            onSetRequiredFields: t.setRequiredFields,
                            onUpdateAmount: c.handleAmount,
                            onUpdateTitle: c.updateTitle,
                            onCreateDeposit: c.createDeposit,
                            onClickOnAmountTag: c.clickOnAmountTag,
                            onClickOnSubmitButton: c.clickOnSubmitButton,
                            onClickOnCardType: c.clickOnCardType,
                            onClickOnCryptoType: c.clickOnCryptoType,
                            onClickOnDetailingButton: c.clickOnDetailingButton,
                            onHandleEvent: c.handlePaySubmit,
                            onFetchUserDataPaymentSnippet: t.fetchUserDataPaymentSnippet,
                            onFocusAmount: t.startPaymentSession
                        }, null, 8, ["value", "card", "amount", "api-response", "custom-messages", "amount-rules", "currency", "button-enabled", "fetching", "show-bank-card-payments", "is-current-payment-crypto", "is-current-payment-india", "initial-fields", "is-required-fields-valid", "required-fields-data", "plain-required-field-descriptions", "header-hint", "is-activated-bonus", "limit-deposit-text", "deposit-id", "default-amount", "country", "annotation", "notice-key", "payment-session-id", "onInput", "onOnFieldChange", "onChangeApiResponse", "onCustomMessageAction", "onSetRequiredFields", "onUpdateAmount", "onUpdateTitle", "onCreateDeposit", "onClickOnAmountTag", "onClickOnSubmitButton", "onClickOnCardType", "onClickOnCryptoType", "onClickOnDetailingButton", "onHandleEvent", "onFetchUserDataPaymentSnippet", "onFocusAmount"])) : t.showInstruction ? ((0, i.wg)(), (0, i.j4)(g, {
                            key: 2,
                            "payment-method-name": t.paymentMethod.value,
                            "payment-method-text": t.localeFormat(t.paymentMethod.label),
                            onClose: e[2] || (e[2] = e => t.showInstruction = !1),
                            onClickOnDetailingButton: c.clickOnDetailingButton
                        }, null, 8, ["payment-method-name", "payment-method-text", "onClickOnDetailingButton"])) : t.customPageItem ? ((0, i.wg)(), (0, i.j4)(C, {
                            key: 3,
                            "custom-page-item": t.customPageItem,
                            "button-link": t.customPageButtonLink,
                            "page-data": t.customPageData,
                            onUpdateTitle: c.updateTitle,
                            onClickButton: c.clearCustomPageData
                        }, null, 8, ["custom-page-item", "button-link", "page-data", "onUpdateTitle", "onClickButton"])) : t.showPeerToPeerMerchant ? ((0, i.wg)(), (0, i.j4)(_, {
                            key: t.paymentMethod.value,
                            currency: u.currentCurrency,
                            "default-amount": t.paymentAmountSnippet,
                            "initial-fields": t.initialFields,
                            "is-required-fields-valid": t.isRequiredFieldsValid,
                            "payment-method": t.paymentMethod,
                            "plain-required-field-descriptions": t.plainRequiredFieldDescriptions,
                            "required-fields-data": t.requiredFieldsData,
                            "is-activated-bonus": t.isActivatedBonus,
                            "amount-rules": t.amountRules,
                            "notice-key": t.hostToHostNoticeKey,
                            country: t.country,
                            "payment-session-id": t.paymentSessionId,
                            onClickOnAmountTag: c.clickOnAmountTag,
                            onCustomMessageAction: c.handleCustomMessageAction,
                            onSetRequiredFields: t.setRequiredFields,
                            onUpdateAmount: c.handleAmount,
                            onFocusAmount: t.startPaymentSession
                        }, null, 8, ["currency", "default-amount", "initial-fields", "is-required-fields-valid", "payment-method", "plain-required-field-descriptions", "required-fields-data", "is-activated-bonus", "amount-rules", "notice-key", "country", "payment-session-id", "onClickOnAmountTag", "onCustomMessageAction", "onSetRequiredFields", "onUpdateAmount", "onFocusAmount"])) : t.showDepositMerchantIndia ? ((0, i.wg)(), (0, i.j4)(D, {
                            key: 5,
                            ref: "depositMerchantIndia",
                            "deposit-id": t.depositId,
                            amount: t.amount,
                            fetching: t.fetching,
                            "payment-method": t.paymentMethod,
                            "custom-messages": t.customMessages,
                            "amount-rules": t.amountRules,
                            country: t.country,
                            currency: u.currentCurrency,
                            "header-hint": c.headerHint,
                            "show-receipt-upload": t.showReceiptUpload(t.paymentMethod.name),
                            annotation: t.annotation,
                            "promo-banner-i-p-l-country": t.promoBannerIPLCountry,
                            onUpdateTitle: c.updateTitle,
                            onOnFieldChange: e[3] || (e[3] = e => t.onFieldChange(...e)),
                            onCreateDeposit: c.createDeposit,
                            onCustomMessageCloseAmount: e[4] || (e[4] = e => t.clearCustomMessage("amountError")),
                            onCustomMessageAction: c.handleCustomMessageAction,
                            onUpdateAmount: c.handleAmount,
                            onClickOnAmountTag: c.clickOnAmountTag,
                            onClickOnSubmitButton: c.clickOnSubmitButton,
                            onClickOnDetailingButton: c.clickOnDetailingButton,
                            onHandleFileUpload: c.handleFileUpload,
                            onHandleEvent: c.handlePaySubmit,
                            onFocusAmount: t.startPaymentSession
                        }, null, 8, ["deposit-id", "amount", "fetching", "payment-method", "custom-messages", "amount-rules", "country", "currency", "header-hint", "show-receipt-upload", "annotation", "promo-banner-i-p-l-country", "onUpdateTitle", "onCreateDeposit", "onCustomMessageAction", "onUpdateAmount", "onClickOnAmountTag", "onClickOnSubmitButton", "onClickOnDetailingButton", "onHandleFileUpload", "onHandleEvent", "onFocusAmount"])) : t.isDepositMerchant(t.$options.CARD_VIEW.EAZEPE) && !t.customPageItem ? ((0, i.wg)(), (0, i.j4)(f, {
                            key: 6,
                            amount: t.amount,
                            country: t.country,
                            currency: u.currentCurrency,
                            fetching: t.fetching,
                            "header-hint": c.headerHint,
                            "amount-rules": t.amountRules,
                            "payment-method": t.paymentMethod,
                            "custom-messages": t.customMessages,
                            annotation: t.annotation,
                            "promo-banner-i-p-l-country": t.promoBannerIPLCountry,
                            onUpdateAmount: c.handleAmount,
                            onUpdateTitle: c.updateTitle,
                            onCreateDeposit: c.createDeposit,
                            onClickOnAmountTag: c.clickOnAmountTag,
                            onCustomMessageClose: e[5] || (e[5] = e => t.clearCustomMessage("amountError")),
                            onCustomMessageAction: c.handleCustomMessageAction,
                            onFocusAmount: t.startPaymentSession
                        }, null, 8, ["amount", "country", "currency", "fetching", "header-hint", "amount-rules", "payment-method", "custom-messages", "annotation", "promo-banner-i-p-l-country", "onUpdateAmount", "onUpdateTitle", "onCreateDeposit", "onClickOnAmountTag", "onCustomMessageAction", "onFocusAmount"])) : t.isLoadingFields ? ((0, i.wg)(), (0, i.j4)(v, {
                            key: 7,
                            class: (0, o.C_)(t.$style.loader)
                        }, null, 8, ["class"])) : ((0, i.wg)(), (0, i.iD)(i.HY, {
                            key: 8
                        }, [(0, i.Wm)(w, {
                            class: (0, o.C_)(t.$style.promoBannerIPL),
                            country: t.promoBannerIPLCountry
                        }, null, 8, ["class", "country"]), t.annotation.text ? ((0, i.wg)(), (0, i.j4)(k, {
                            key: 0,
                            class: (0, o.C_)(t.$style.annotation),
                            style: (0, o.j5)(t.annotation.style)
                        }, {
                            default: (0, i.w5)((() => [(0, i._)("span", {
                                innerHTML: c.sanitizedAnnotationText
                            }, null, 8, a)])),
                            _: 1
                        }, 8, ["class", "style"])) : (0, i.kq)("", !0), !c.showForm || t.isCurrentPaymentCrypto || t.hideMethodLimits ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.iD)("div", {
                            key: 1,
                            class: (0, o.C_)(t.$style.headerHint)
                        }, (0, o.zw)(c.text.limit) + " " + (0, o.zw)(c.headerHint), 3)), t.showBankCardPayments ? ((0, i.wg)(), (0, i.j4)(b, {
                            key: 2,
                            class: (0, o.C_)(t.$style.cardTypeSelect),
                            "show-header": "",
                            value: t.paymentMethod,
                            payments: t.card ? t.card.payments : [],
                            onPaymentSelect: c.changeCard
                        }, null, 8, ["class", "value", "payments", "onPaymentSelect"])) : (0, i.kq)("", !0), c.showForm ? ((0, i.wg)(), (0, i.iD)("form", {
                            key: 3,
                            class: (0, o.C_)(t.$style.form),
                            onSubmit: e[12] || (e[12] = (0, s.iM)(((...t) => c.createDeposit && c.createDeposit(...t)), ["prevent"]))
                        }, [t.showBanksGroup ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(t.$style.formDefault)
                        }, [n.error ? ((0, i.wg)(), (0, i.iD)("div", r, (0, o.zw)(n.error), 1)) : (0, i.kq)("", !0), t.showBankCard ? ((0, i.wg)(), (0, i.j4)(A, {
                            key: 1,
                            "bank-info": t.paymentMethod.cardInfo,
                            wallet: t.requiredFieldsData[t.cardNumberField.field],
                            "card-holder": t.requiredFieldsData[t.cardHolderField.field],
                            cvv: t.requiredFieldsData[t.cardCvvField.field],
                            "expire-date-month": t.expireDateMonth,
                            "expire-date-year": t.expireDateYear,
                            "wallet-props": t.cardNumberField.props,
                            "card-holder-props": t.cardHolderField.props,
                            "cvv-props": t.cardCvvField.props,
                            "date-props": t.cardExpireDateField.props,
                            "payment-method": t.paymentMethod,
                            onOnWalletInput: c.onWalletInput,
                            onOnCardHolderInput: t.cardHolderField.events["update:modelValue"],
                            onOnCvvInput: t.cardCvvField.events["update:modelValue"],
                            onOnExpireDateMonthInput: t.onExpireDateMonthInput,
                            onOnExpireDateYearInput: t.onExpireDateYearInput,
                            onOnBankCardInfoValid: e[6] || (e[6] = e => t.isBankCardFieldsValid = e)
                        }, null, 8, ["bank-info", "wallet", "card-holder", "cvv", "expire-date-month", "expire-date-year", "wallet-props", "card-holder-props", "cvv-props", "date-props", "payment-method", "onOnWalletInput", "onOnCardHolderInput", "onOnCvvInput", "onOnExpireDateMonthInput", "onOnExpireDateYearInput"])) : t.showCardWalletOnly ? ((0, i.wg)(), (0, i.j4)(I, {
                            key: 2,
                            "bank-info": t.paymentMethod.cardInfo,
                            wallet: t.wallet,
                            "payment-method": t.paymentMethod,
                            "custom-messages-wallet-error": t.customMessages.walletError,
                            onOnWalletInput: t.onWalletInputBankCard
                        }, null, 8, ["bank-info", "wallet", "payment-method", "custom-messages-wallet-error", "onOnWalletInput"])) : (0, i.kq)("", !0), ((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.plainRequiredFieldDescriptionsFiltered, (e => ((0, i.wg)(), (0, i.j4)(M, {
                            key: e.field,
                            data: e,
                            theme: c.greyTheme ? "grey" : "light-grey",
                            disabled: t.isDisabledField(e),
                            onHandleEvent: t => c.handleDynamicField(t, e)
                        }, null, 8, ["data", "theme", "disabled", "onHandleEvent"])))), 128)), t.showWallet && !t.showCardWalletOnly ? ((0, i.wg)(), (0, i.j4)(B, {
                            key: 3,
                            modelValue: t.wallet,
                            "onUpdate:modelValue": e[7] || (e[7] = e => t.wallet = e),
                            modelModifiers: {
                                trim: !0
                            },
                            placeholder: t.additionalDataPlaceholder,
                            "custom-message": t.customMessages.walletError,
                            name: c.paymentWalletInputProperties.name,
                            type: c.paymentWalletInputProperties.type,
                            autocomplete: c.paymentWalletInputProperties.autocomplete,
                            theme: "light-grey",
                            onCustomMessageClose: e[8] || (e[8] = e => t.clearCustomMessage("walletError")),
                            onCustomMessageAction: c.handleCustomMessageAction
                        }, null, 8, ["modelValue", "placeholder", "custom-message", "name", "type", "autocomplete", "onCustomMessageAction"])) : (0, i.kq)("", !0), t.showAmountField ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                            key: 4
                        }, [(0, i.Wm)(P, {
                            class: (0, o.C_)(t.$style.inputAmount),
                            "payment-method": t.paymentMethod,
                            "custom-messages": t.customMessages,
                            "amount-rules": t.amountRules,
                            currency: u.currentCurrency,
                            theme: c.greyTheme ? "grey-theme" : "white-theme",
                            "model-value": t.amount,
                            "show-icon": !c.greyTheme,
                            success: t.getAmountFieldDescription.success,
                            error: t.getAmountFieldDescription.error,
                            required: t.getAmountFieldDescription.required,
                            "error-text": t.getAmountFieldDescription.errorText,
                            onCustomMessageClose: e[9] || (e[9] = e => t.clearCustomMessage("amountError")),
                            onCustomMessageAction: c.handleCustomMessageAction,
                            "onUpdate:modelValue": c.handleAmount,
                            onFocusAmount: t.startPaymentSession
                        }, null, 8, ["class", "payment-method", "custom-messages", "amount-rules", "currency", "theme", "model-value", "show-icon", "success", "error", "required", "error-text", "onCustomMessageAction", "onUpdate:modelValue", "onFocusAmount"]), c.greyTheme ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(t.$style.limitDeposit)
                        }, [(0, i._)("span", null, (0, o.zw)(t.langCommon.p2p.limit), 1), (0, i._)("span", null, (0, o.zw)(c.limitDepositText), 1)], 2)) : (0, i.kq)("", !0), (0, i.Wm)(S, {
                            "amount-rules": t.amountRules,
                            currency: u.currentCurrency,
                            "recommended-amounts": t.paymentMethod.recommendedAmounts,
                            onChange: c.clickOnAmountTag
                        }, null, 8, ["amount-rules", "currency", "recommended-amounts", "onChange"])], 64)) : (0, i.kq)("", !0), t.needShowInstructionButton ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 5,
                            class: (0, o.C_)(t.$style.instructionButton),
                            onClick: e[10] || (e[10] = e => t.showInstruction = !0)
                        }, [(0, i._)("span", null, (0, o.zw)(t.langCommon.paymentInstruction.common.buttonInstruction), 1), (0, i.Wm)(O, {
                            icon: "book"
                        })], 2)) : (0, i.kq)("", !0), (0, i.Wm)(T, {
                            country: t.country,
                            currency: u.currentCurrency,
                            "payment-method": t.paymentMethod
                        }, null, 8, ["country", "currency", "payment-method"]), t.showDepositButton ? ((0, i.wg)(), (0, i.j4)(h, {
                            key: 6,
                            class: (0, o.C_)(t.$style.sendButton),
                            disabled: !c.buttonEnabled,
                            loading: t.fetching,
                            "not-prevent": "",
                            onClick: c.clickOnSubmitButton
                        }, {
                            default: (0, i.w5)((() => {
                                var e;
                                return [(0, i._)("span", null, (0, o.zw)(null != (e = t.depositButtonText) ? e : c.text.form.submit_button), 1)]
                            })),
                            _: 1
                        }, 8, ["class", "disabled", "loading", "onClick"])) : (0, i.kq)("", !0), (0, i.Wm)($, {
                            class: (0, o.C_)(t.$style.copyright),
                            "payment-name": null == (d = t.paymentMethod) ? void 0 : d.value
                        }, null, 8, ["class", "payment-name"]), t.showDetailingButton ? ((0, i.wg)(), (0, i.j4)(F, {
                            key: 7,
                            class: (0, o.C_)(t.$style.detailingButton),
                            "white-theme": "",
                            onClick: c.openDetailingModal
                        }, null, 8, ["class", "onClick"])) : (0, i.kq)("", !0)], 2)), t.getDropdownDescription && t.showBanksGroup && !t.offline ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 1,
                            class: (0, o.C_)(t.$style.banksGroup)
                        }, [(0, i.Wm)(M, {
                            data: t.getDropdownDescription,
                            "is-bank-venezuela": t.isBankVenezuela,
                            onHandleEvent: e[11] || (e[11] = e => c.handleDynamicField(e, t.getDropdownDescription))
                        }, null, 8, ["data", "is-bank-venezuela"]), t.getDropdownDescription.props.modelValue ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 0,
                            class: (0, o.C_)(t.$style.buttonsBanksGroup)
                        }, [(0, i.Wm)(h, {
                            class: (0, o.C_)(t.$style.backButton),
                            theme: "grey",
                            onClick: t.onPreviousStep
                        }, {
                            default: (0, i.w5)((() => [(0, i.Wm)(O, {
                                icon: "angle-left",
                                size: 12,
                                class: (0, o.C_)(t.$style.backButtonIcon)
                            }, null, 8, ["class"])])),
                            _: 1
                        }, 8, ["class", "onClick"]), (0, i.Wm)(h, {
                            class: (0, o.C_)(t.$style.buttonBanksGroup),
                            theme: "green",
                            loading: t.fetching,
                            "not-prevent": "",
                            wide: "",
                            onClick: c.createDeposit
                        }, {
                            default: (0, i.w5)((() => {
                                var e;
                                return [(0, i._)("span", null, (0, o.zw)(null != (e = t.depositButtonText) ? e : c.text.form.submit_button), 1)]
                            })),
                            _: 1
                        }, 8, ["class", "loading", "onClick"])], 2)) : (0, i.kq)("", !0)], 2)) : (0, i.kq)("", !0)], 34)) : (0, i.kq)("", !0), t.isUnifiedFlow ? ((0, i.wg)(), (0, i.j4)(R, {
                            key: 4,
                            "api-response": t.unifiedFlowData,
                            "bank-icon-name": t.selectedDropdownField,
                            "payment-name": t.paymentMethod.name,
                            "deposit-id": t.depositId,
                            "notice-key": t.hostToHostNoticeKey,
                            "is-amount-changed": t.isAmountChanged,
                            onCancel: c.clearInstructions
                        }, null, 8, ["api-response", "bank-icon-name", "payment-name", "deposit-id", "notice-key", "is-amount-changed", "onCancel"])) : (null == (p = t.instructions) ? void 0 : p.mobileData) ? ((0, i.wg)(), (0, i.j4)(q, {
                            key: 5,
                            "api-response": t.instructions.mobileData,
                            amount: t.amount,
                            currency: u.currentCurrency,
                            "deposit-id": t.depositId,
                            "get-text-by-keys": t.getTextByKeys,
                            onCancelDeposit: c.clearInstructions
                        }, null, 8, ["api-response", "amount", "currency", "deposit-id", "get-text-by-keys", "onCancelDeposit"])) : c.isHostToHost ? ((0, i.wg)(), (0, i.j4)(x, {
                            key: 6,
                            currency: (null == (W = t.instructions) ? void 0 : W.payment_currency) || u.currentCurrency,
                            amount: t.instructions.payment_amount,
                            "payment-system": (null == (V = null == (N = t.instructions) ? void 0 : N.card) ? void 0 : V.payment_system) || (null == (U = t.instructions) ? void 0 : U.payment_system),
                            created: t.instructions.created,
                            lifetime: t.instructions.timeout_minutes,
                            "card-number": (null == (j = null == (H = t.instructions) ? void 0 : H.card) ? void 0 : j.number) || (null == (L = t.instructions) ? void 0 : L.account_number),
                            requisites: null == (Z = t.instructions) ? void 0 : Z.requisites,
                            "full-name": null == (G = null == (z = t.instructions) ? void 0 : z.card) ? void 0 : G.fullName,
                            "instruction-data": null == (K = t.instructions) ? void 0 : K.instruction,
                            "ussd-data": t.hostToHostUSSDData,
                            "bank-transfer-data": t.hostToHostBankTransferData,
                            "notice-key": t.hostToHostNoticeKey,
                            "input-field": null == (X = null == (Y = t.instructions) ? void 0 : Y.inputFields) ? void 0 : X[0],
                            "is-bank-venezuela": t.isBankVenezuela,
                            "deposit-id": t.depositId,
                            "bank-icon-name": t.selectedDropdownField,
                            onCancelDeposit: c.clearInstructions
                        }, null, 8, ["currency", "amount", "payment-system", "created", "lifetime", "card-number", "requisites", "full-name", "instruction-data", "ussd-data", "bank-transfer-data", "notice-key", "input-field", "is-bank-venezuela", "deposit-id", "bank-icon-name", "onCancelDeposit"])) : t.qrCodeDepositInstructions ? ((0, i.wg)(), (0, i.j4)(E, (0, i.dG)({
                            key: 7
                        }, t.qrCodeDepositInstructions, {
                            onUpdateTitle: c.updateTitle,
                            onCancelDeposit: c.clearInstructions
                        }), null, 16, ["onUpdateTitle", "onCancelDeposit"])) : t.offline ? ((0, i.wg)(), (0, i.iD)("div", {
                            key: 8,
                            class: (0, o.C_)(t.$style.instruction),
                            innerHTML: c.sanitizeInstructions
                        }, null, 10, l)) : (0, i.kq)("", !0)], 64))], 64)) : (0, i.kq)("", !0)]
                    })),
                    _: 1
                }, 8, ["additional-title", "class-name", "title", "subtitle", "onClose"])
            }
            var d = n(827856),
                c = n.n(d),
                p = n(280894),
                m = n(777428),
                h = n(517910),
                y = n(739971),
                g = n(359865),
                C = n(26446),
                _ = n(978863),
                D = n(996707),
                f = n(300483),
                v = n(62387),
                w = n(835933),
                k = n(559166);
            const b = ["data-index"],
                A = ["src"];

            function I(t, e, n, s, a, r) {
                const l = (0, i.up)("Arrows"),
                    u = (0, i.up)("Carousel"),
                    d = (0, i.up)("Dots"),
                    c = (0, i.up)("VIcon"),
                    p = (0, i.up)("VButton");
                return t.instruction ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, o.C_)(t.$style.container)
                }, [(0, i._)("div", {
                    class: (0, o.C_)(t.$style.header)
                }, [(0, i._)("div", {
                    class: (0, o.C_)(t.$style.title)
                }, (0, o.zw)(r.title), 3), (0, i.Wm)(l, {
                    "is-right-arrow-disabled": r.isRightArrowDisabled,
                    "is-left-arrow-disabled": r.isLeftArrowDisabled,
                    onLeftArrowClick: r.onPrevSlide,
                    onRightArrowClick: r.onNextSlide
                }, null, 8, ["is-right-arrow-disabled", "is-left-arrow-disabled", "onLeftArrowClick", "onRightArrowClick"])], 2), (0, i.Wm)(u, {
                    "max-slide-width": "192px",
                    "active-slide": t.activeSlide,
                    onSetSlide: e[0] || (e[0] = e => t.activeSlide = e)
                }, {
                    default: (0, i.w5)((() => [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(r.steps, ((e, n) => ((0, i.wg)(), (0, i.iD)("div", {
                        key: n,
                        class: (0, o.C_)(t.$style.slide)
                    }, [(0, i._)("div", {
                        "data-index": n + 1,
                        class: (0, o.C_)(t.$style.slideTitle)
                    }, (0, o.zw)(e.title), 11, b), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.slideDescription)
                    }, (0, o.zw)(e.description), 3), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.imageWrapper)
                    }, [(0, i._)("img", {
                        class: (0, o.C_)(t.$style.slideImage),
                        src: e.image.src
                    }, null, 10, A)], 2)], 2)))), 128))])),
                    _: 1
                }, 8, ["active-slide"]), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.dotsWrapper)
                }, [(0, i.Wm)(d, {
                    count: t.instruction.steps.length,
                    "active-dot": t.activeSlide
                }, null, 8, ["count", "active-dot"])], 2), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.footer)
                }, [(0, i.Wm)(p, {
                    theme: "grey",
                    "square-size": "45px",
                    class: (0, o.C_)(t.$style.backButton),
                    onClick: e[1] || (e[1] = e => t.$emit("close"))
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(c, {
                        icon: "chevron-left-bold"
                    })])),
                    _: 1
                }, 8, ["class"]), (0, i.Wm)(p, {
                    theme: "green",
                    class: (0, o.C_)(t.$style.linkButton),
                    onClick: r.onOpenUrl
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(t.instruction.urlText), 1)])),
                    _: 1
                }, 8, ["class", "onClick"])], 2)], 2)) : (0, i.kq)("", !0)
            }
            const M = ["disabled"],
                B = ["disabled"];

            function P(t, e, n, s, a, r) {
                const l = (0, i.up)("VIcon");
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, o.C_)(t.$style.arrows)
                }, [(0, i._)("button", {
                    class: (0, o.C_)(t.$style.arrow),
                    disabled: n.isLeftArrowDisabled,
                    type: "button",
                    onClick: e[0] || (e[0] = e => t.$emit("leftArrowClick"))
                }, [(0, i.Wm)(l, {
                    icon: "chevron-left-bold",
                    size: 8
                })], 10, M), (0, i._)("button", {
                    class: (0, o.C_)(t.$style.arrow),
                    disabled: n.isRightArrowDisabled,
                    type: "button",
                    onClick: e[1] || (e[1] = e => t.$emit("rightArrowClick"))
                }, [(0, i.Wm)(l, {
                    icon: "chevron-right-bold",
                    size: 8
                })], 10, B)], 2)
            }
            const S = {
                    components: {
                        VIcon: k.Z
                    },
                    props: {
                        isLeftArrowDisabled: Boolean,
                        isRightArrowDisabled: Boolean
                    },
                    emits: ["leftArrowClick", "rightArrowClick"]
                },
                O = {
                    arrows: "Arrows_arrows_aUqtS",
                    arrow: "Arrows_arrow_dUqnP"
                };
            var T = n(348118);
            const $ = {};
            $["$style"] = O;
            const F = (0, T.Z)(S, [
                    ["render", P],
                    ["__cssModules", $]
                ]),
                R = F;
            var q = n(250840),
                x = n.n(q),
                E = n(343956),
                W = n(29812)["h"];
            const N = {
                    components: {
                        FadeContainer: E.Z
                    },
                    props: {
                        activeSlide: {
                            type: Number,
                            default: 0
                        },
                        maxSlideWidth: {
                            type: String,
                            default: "100%"
                        },
                        margin: {
                            type: Number,
                            default: 5
                        }
                    },
                    emits: ["setSlide"],
                    data: () => ({
                        slideList: [],
                        lastPosX: 0,
                        offsetX: 0,
                        isDragging: !1,
                        contentLength: 0,
                        clientWidth: 0,
                        clientHeight: 0
                    }),
                    computed: {
                        styles() {
                            return {
                                "--carousel__inner-container-width": `${this.contentLength}px`,
                                "--carousel__max-slide-width": this.maxSlideWidth,
                                "--carousel__offset": `-${this.offsetX}px`,
                                "--carousel__margin": `${this.margin}px`,
                                transition: this.isDragging ? "none" : "transform .5s"
                            }
                        }
                    },
                    watch: {
                        activeSlide: "calculateOffsetByActiveSlide"
                    },
                    mounted() {
                        this.update(), this.calculateOffsetByActiveSlide(this.activeSlide), this.observer = new ResizeObserver(this.updateSizes), this.observer.observe(this.$refs.container.$el), this.contentLength = this.slideList.reduce(((t, e) => {
                            const {
                                width: n
                            } = e.getBoundingClientRect();
                            return t + n + this.margin
                        }), 0), this.hammerInstance = new(x())(this.$refs.containerInner, {
                            direction: x().DIRECTION_HORIZONTAL,
                            threshold: 0
                        }), this.hammerInstance.on("pan", this.onPan.bind(this))
                    },
                    beforeUnmount() {
                        this.observer.unobserve(this.$refs.container.$el), this.hammerInstance.destroy()
                    },
                    methods: {
                        calculateOffsetByActiveSlide(t) {
                            const e = this.slideList.slice(0, t),
                                n = e.reduce(((t, e) => {
                                    const {
                                        width: n
                                    } = e.getBoundingClientRect();
                                    return t + n + this.margin
                                }), 0);
                            this.offsetX = Math.min(n, this.maxOffsetWidth)
                        },
                        onPan(t) {
                            0 === t.center.x && 0 === t.center.y || (this.isDragging || (this.isDragging = !0, this.lastPosX = this.offsetX), this.offsetX = t.deltaX - this.lastPosX >= 0 ? 0 : Math.min(this.lastPosX - t.deltaX, this.maxOffsetWidth), t.isFinal && (this.isDragging = !1, (0, i.Y3)((() => {
                                this.getSlideNumber()
                            }))))
                        },
                        getSlideNumber() {
                            const t = this.slideList.slice(0, -1).map(((t, e) => {
                                const {
                                    width: n
                                } = t.getBoundingClientRect();
                                return (n + this.margin) * e
                            }));
                            t.push(this.maxOffsetWidth);
                            const e = t.map(((t, e) => [e, Math.abs(this.offsetX - t)])),
                                [n] = e.reduce((([t, e], [n, i]) => e > i ? [n, i] : [t, e]), [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]);
                            this.$emit("setSlide", n), this.calculateOffsetByActiveSlide(n)
                        },
                        update() {
                            var t, e;
                            const {
                                clientWidth: n
                            } = null != (e = null == (t = this.$refs.container) ? void 0 : t.$el) ? e : {}, {
                                scrollWidth: i,
                                children: o = []
                            } = this.$refs.containerInner;
                            this.slideList = [...o], this.maxOffsetWidth = i - (n - 10)
                        },
                        updateSizes() {
                            const {
                                clientWidth: t,
                                clientHeight: e
                            } = this.$refs.container.$el;
                            this.clientWidth = t, this.clientHeight = e
                        }
                    },
                    render() {
                        var t, e, n;
                        const [i] = null != (n = null == (e = (t = this.$slots).default) ? void 0 : e.call(t)) ? n : [];
                        return W(E.Z, {
                            ref: "container",
                            class: this.$style.container,
                            clientWidth: this.clientWidth,
                            clientHeight: this.clientHeight,
                            contentLength: this.contentLength,
                            contentOffset: this.offsetX,
                            fadeStart: this.isDragging || this.slideList.length - 1 === this.activeSlide,
                            tintMaxSize: 25
                        }, W("div", {
                            ref: "containerInner",
                            class: this.$style.containerInner,
                            style: this.styles
                        }, null == i ? void 0 : i.children.map((t => W("div", {
                            class: this.$style.slide
                        }, t)))))
                    }
                },
                V = {
                    container: "Carousel_container_GSuMy",
                    containerInner: "Carousel_containerInner_FnO7P",
                    slide: "Carousel_slide_ehUaR"
                },
                U = {};
            U["$style"] = V;
            const H = (0, T.Z)(N, [
                    ["__cssModules", U]
                ]),
                j = H;

            function L(t, e, n, s, a, r) {
                return (0, i.wg)(), (0, i.iD)("div", {
                    class: (0, o.C_)(t.$style.dots),
                    style: (0, o.j5)(r.styles)
                }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(n.count, ((e, s) => ((0, i.wg)(), (0, i.iD)("div", {
                    key: s,
                    class: (0, o.C_)(s === n.activeDot ? t.$style.activeDot : t.$style.dot)
                }, null, 2)))), 128))], 6)
            }
            const Z = {
                    props: {
                        count: {
                            type: Number,
                            required: !0
                        },
                        activeDot: {
                            type: Number,
                            default: null
                        },
                        dotSize: {
                            type: Number,
                            default: 5
                        }
                    },
                    computed: {
                        styles() {
                            return {
                                "--dots__size": `${this.dotSize}px`
                            }
                        }
                    }
                },
                z = {
                    dots: "Dots_dots_fnWuv",
                    dot: "Dots_dot_a8eOZ",
                    activeDot: "Dots_activeDot_HoYuF Dots_dot_a8eOZ"
                },
                G = {};
            G["$style"] = z;
            const K = (0, T.Z)(Z, [
                    ["render", L],
                    ["__cssModules", G]
                ]),
                Y = K;
            var X = n(583582),
                Q = n(932256),
                J = n(563637),
                tt = Object.defineProperty,
                et = Object.defineProperties,
                nt = Object.getOwnPropertyDescriptors,
                it = Object.getOwnPropertySymbols,
                ot = Object.prototype.hasOwnProperty,
                st = Object.prototype.propertyIsEnumerable,
                at = (t, e, n) => e in t ? tt(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                rt = (t, e) => {
                    for (var n in e || (e = {})) ot.call(e, n) && at(t, n, e[n]);
                    if (it)
                        for (var n of it(e)) st.call(e, n) && at(t, n, e[n]);
                    return t
                },
                lt = (t, e) => et(t, nt(e)),
                ut = (t, e, n) => new Promise(((i, o) => {
                    var s = t => {
                            try {
                                r(n.next(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        a = t => {
                            try {
                                r(n.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        r = t => t.done ? i(t.value) : Promise.resolve(t.value).then(s, a);
                    r((n = n.apply(t, e)).next())
                }));
            const dt = {
                    components: {
                        Arrows: R,
                        Carousel: j,
                        Dots: Y,
                        VButton: X.Z,
                        VIcon: k.Z
                    },
                    props: {
                        paymentMethodName: {
                            type: String,
                            required: !0,
                            validator: t => Q.BOt.includes(t)
                        },
                        paymentMethodText: {
                            type: String,
                            required: !0
                        }
                    },
                    emits: ["close"],
                    data: () => ({
                        activeSlide: 0,
                        instruction: null
                    }),
                    computed: {
                        isRightArrowDisabled() {
                            return this.activeSlide >= this.instruction.steps.length - 1
                        },
                        isLeftArrowDisabled() {
                            return this.activeSlide <= 0
                        },
                        text() {
                            return this.$store.getters.langCommon.paymentInstruction.common
                        },
                        title() {
                            return (0, J.Uw)(this.text.title, this.paymentMethodText)
                        },
                        steps() {
                            var t;
                            return null == (t = this.instruction) ? void 0 : t.steps.map(((t, e) => 0 === e ? lt(rt({}, t), {
                                description: (0, J.Uw)(t.description, this.instruction.name)
                            }) : t))
                        }
                    },
                    watch: {
                        paymentMethodName: "loadInstructions"
                    },
                    mounted() {
                        this.loadInstructions()
                    },
                    methods: {
                        loadInstructions() {
                            return ut(this, null, (function*() {
                                this.instruction = yield this.$store.getters.getInstructionByPaymentMethod(this.paymentMethodName)
                            }))
                        },
                        onOpenUrl() {
                            window.open(this.instruction.url, "_blank").focus()
                        },
                        onNextSlide() {
                            this.isRightArrowDisabled || (this.activeSlide += 1)
                        },
                        onPrevSlide() {
                            this.isLeftArrowDisabled || (this.activeSlide -= 1)
                        }
                    }
                },
                ct = {
                    container: "DepositInstructionDesktop_container__TRFV",
                    header: "DepositInstructionDesktop_header_WxfCM",
                    title: "DepositInstructionDesktop_title_EIVbZ",
                    slide: "DepositInstructionDesktop_slide_Ua7yQ",
                    slideTitle: "DepositInstructionDesktop_slideTitle_flDvc",
                    slideDescription: "DepositInstructionDesktop_slideDescription_QvTWD",
                    slideImage: "DepositInstructionDesktop_slideImage_rJJSg",
                    imageWrapper: "DepositInstructionDesktop_imageWrapper_CXEt_",
                    dotsWrapper: "DepositInstructionDesktop_dotsWrapper_bWYBz",
                    footer: "DepositInstructionDesktop_footer_Q3xUi",
                    linkButton: "DepositInstructionDesktop_linkButton_zrf7t",
                    backButton: "DepositInstructionDesktop_backButton_S3Dwr"
                },
                pt = {};
            pt["$style"] = ct;
            const mt = (0, T.Z)(dt, [
                    ["render", I],
                    ["__cssModules", pt]
                ]),
                ht = mt;
            var yt = n(464168),
                gt = n(425646),
                Ct = n(217504),
                _t = n(580623),
                Dt = n(406696),
                ft = n(438643),
                vt = n(515743),
                wt = n(284290),
                kt = n(920346),
                bt = n(262884),
                At = n(517621),
                It = n(362802),
                Mt = n(247681),
                Bt = n(945436),
                Pt = n(442916),
                St = n(266869),
                Ot = n(283709),
                Tt = n(212628),
                $t = n(112808);

            function Ft(t, e, n, s, a, r) {
                const l = (0, i.up)("VButton"),
                    u = (0, i.up)("DepositCustomPageText");
                return r.customPageComponent ? ((0, i.wg)(), (0, i.j4)((0, i.LL)(r.customPageComponent), (0, i.dG)({
                    key: 0,
                    "custom-page-item": n.customPageItem
                }, n.pageData, {
                    onReset: r.clickButton,
                    onUpdateTitle: r.updateTitle,
                    onClickOnDetailingButton: r.clickOnDetailingButton
                }), null, 16, ["custom-page-item", "onReset", "onUpdateTitle", "onClickOnDetailingButton"])) : ((0, i.wg)(), (0, i.j4)(u, {
                    key: 1,
                    "custom-page-item": n.customPageItem,
                    onTitle: r.updateTitle
                }, {
                    default: (0, i.w5)((({
                        text: e
                    }) => [(0, i._)("div", null, [(0, i._)("div", {
                        class: (0, o.C_)(t.$style.text)
                    }, (0, o.zw)(e.text), 3), (0, i.Wm)(l, {
                        tag: "a",
                        class: (0, o.C_)(t.$style.button),
                        href: n.buttonLink,
                        rel: "noopener noreferrer",
                        target: "_blank",
                        "not-prevent": "",
                        onClick: r.clickButton
                    }, {
                        default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(e.button), 1)])),
                        _: 2
                    }, 1032, ["class", "href", "onClick"])])])),
                    _: 1
                }, 8, ["custom-page-item", "onTitle"]))
            }
            var Rt = n(297637);
            const qt = {
                    components: {
                        DepositCustomPageText: Rt["default"],
                        VButton: X.Z
                    },
                    props: {
                        customPageItem: {
                            type: Object,
                            validator: t => vt.Mr.includes(t.pageId),
                            required: !0
                        },
                        pageData: {
                            type: Object,
                            default: null
                        },
                        buttonLink: {
                            type: String,
                            default: null
                        }
                    },
                    emits: ["clickButton", "updateTitle", "clickOnDetailingButton"],
                    computed: {
                        customPageComponent() {
                            return this.customPageItem.componentName ? (0, i.RC)((() => n(989652)(`./${this.customPageItem.componentName}.vue`))) : null
                        }
                    },
                    beforeUnmount() {
                        this.updateTitle(null)
                    },
                    methods: {
                        clickButton() {
                            this.$emit("clickButton")
                        },
                        updateTitle(t) {
                            this.$emit("updateTitle", t)
                        },
                        clickOnDetailingButton() {
                            this.$emit("clickOnDetailingButton")
                        }
                    }
                },
                xt = {
                    text: "DepositCustomPage_text_LB0LW",
                    button: "DepositCustomPage_button_jDKqW"
                },
                Et = {};
            Et["$style"] = xt;
            const Wt = (0, T.Z)(qt, [
                    ["render", Ft],
                    ["__cssModules", Et]
                ]),
                Nt = Wt;
            var Vt = n(228535);
            const Ut = ["innerHTML"],
                Ht = ["onSubmit"];

            function jt(t, e, n, a, r, l) {
                const u = (0, i.up)("Annotation"),
                    d = (0, i.up)("BillingVideoInstruction"),
                    c = (0, i.up)("VInputSearch"),
                    p = (0, i.up)("PaymentTile"),
                    m = (0, i.up)("FadeContainerScroll"),
                    h = (0, i.up)("DepositPeerToPeer"),
                    y = (0, i.up)("DepositMerchantIndia"),
                    g = (0, i.up)("VDynamicField"),
                    C = (0, i.up)("DepositModalAmount"),
                    _ = (0, i.up)("VButton"),
                    D = (0, i.up)("CryptoGroup"),
                    f = (0, i.up)("CryptoDeposit"),
                    v = (0, i.up)("BaseDepositPaymentsGroup");
                return (0, i.wg)(), (0, i.j4)(v, {
                    payments: l.cardPayments,
                    search: t.search,
                    fetching: n.fetching,
                    onInput: l.changePayment,
                    onCreateDeposit: l.createDeposit
                }, {
                    default: (0, i.w5)((({
                        text: a,
                        filteredPayments: r,
                        onSelectPayment: v,
                        sendForm: w,
                        depositPending: k,
                        depositCreated: b,
                        cancelDeposit: A
                    }) => [(0, i._)("div", {
                        class: (0, o.C_)([t.$style.container, !n.isCurrentPaymentCrypto && t.$style.containerHeight])
                    }, [l.showAnnotation ? ((0, i.wg)(), (0, i.j4)(u, {
                        key: 0,
                        class: (0, o.C_)(t.$style.annotation),
                        style: (0, o.j5)(n.annotation.style)
                    }, {
                        default: (0, i.w5)((() => [(0, i._)("span", {
                            innerHTML: l.sanitizedAnnotationText
                        }, null, 8, Ut)])),
                        _: 1
                    }, 8, ["class", "style"])) : (0, i.kq)("", !0), "crypto" === n.card.groupCategory && 1 === t.step ? ((0, i.wg)(), (0, i.j4)(d, {
                        key: 1,
                        class: (0, o.C_)(t.$style.cryptoInstruction),
                        "is-crypto-group": "",
                        country: n.country,
                        "instruction-link": t.cryptoVideoUrl
                    }, null, 8, ["class", "country", "instruction-link"])) : (0, i.kq)("", !0), l.title && !k ? ((0, i.wg)(), (0, i.iD)("div", {
                        key: 2,
                        class: (0, o.C_)(t.$style.title)
                    }, (0, o.zw)(l.title), 3)) : (0, i.kq)("", !0), k || 1 !== t.step ? (0, i.kq)("", !0) : ((0, i.wg)(), (0, i.j4)(c, {
                        key: 3,
                        modelValue: t.search,
                        "onUpdate:modelValue": e[0] || (e[0] = e => t.search = e),
                        class: (0, o.C_)(t.$style.input)
                    }, null, 8, ["modelValue", "class"])), 0 === r.length && t.search ? ((0, i.wg)(), (0, i.iD)("div", {
                        key: 4,
                        class: (0, o.C_)(t.$style.notFound)
                    }, (0, o.zw)(a.notFound), 3)) : !k && l.showPaymentTiles ? ((0, i.wg)(), (0, i.j4)(m, {
                        key: 5,
                        class: (0, o.C_)(t.$style.list),
                        axis: "y",
                        "tint-max-size": 20
                    }, {
                        default: (0, i.w5)((() => [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(r, (e => ((0, i.wg)(), (0, i.j4)(p, {
                            key: e.name,
                            payment: e,
                            class: (0, o.C_)(t.$style.tile),
                            active: l.paymentTileIsActive(e),
                            onToggle: t => l.handleTileClick(e, v)
                        }, null, 8, ["payment", "class", "active", "onToggle"])))), 128))])),
                        _: 2
                    }, 1032, ["class"])) : (0, i.kq)("", !0), l.formType(t.$options.CARD_VIEW.P2P) ? ((0, i.wg)(), (0, i.j4)(h, {
                        key: n.value.name,
                        currency: n.currency,
                        "default-amount": n.defaultAmount,
                        "initial-fields": n.initialFields,
                        "is-required-fields-valid": n.isRequiredFieldsValid,
                        "payment-method": n.value,
                        "plain-required-field-descriptions": n.plainRequiredFieldDescriptions,
                        "required-fields-data": n.requiredFieldsData,
                        "card-group": n.card.groupCategory,
                        "is-activated-bonus": n.isActivatedBonus,
                        "amount-rules": n.amountRules,
                        "notice-key": n.noticeKey,
                        country: n.country,
                        "payment-session-id": n.paymentSessionId,
                        onCancelDeposit: A,
                        onClickOnAmountTag: l.clickOnAmountTag,
                        onCustomMessageAction: l.customMessageAction,
                        onDepositCreated: b,
                        onSetRequiredFields: l.setRequiredFields,
                        onUpdateAmount: l.updateAmount,
                        onFocusAmount: l.onFocusAmount
                    }, null, 8, ["currency", "default-amount", "initial-fields", "is-required-fields-valid", "payment-method", "plain-required-field-descriptions", "required-fields-data", "card-group", "is-activated-bonus", "amount-rules", "notice-key", "country", "payment-session-id", "onCancelDeposit", "onClickOnAmountTag", "onCustomMessageAction", "onDepositCreated", "onSetRequiredFields", "onUpdateAmount", "onFocusAmount"])) : l.formType(t.$options.CARD_VIEW.PAY_TM) && 2 === t.step ? ((0, i.wg)(), (0, i.j4)(y, {
                        key: 7,
                        ref: "depositMerchantIndia",
                        amount: n.amount,
                        fetching: n.fetching,
                        "payment-method": n.value,
                        "custom-messages": n.customMessages,
                        "amount-rules": n.amountRules,
                        currency: n.currency,
                        "header-hint": n.headerHint,
                        "deposit-id": n.depositId,
                        annotation: n.annotation,
                        "is-cancelable": "",
                        onUpdateTitle: l.updateTitle,
                        onOnFieldChange: e[1] || (e[1] = t => l.onFieldChange(...t)),
                        onCreateDeposit: l.createDeposit,
                        onCustomMessageCloseAmount: l.customMessageCloseAmount,
                        onCustomMessageAction: l.customMessageAction,
                        onUpdateAmount: l.updateAmount,
                        onClickOnAmountTag: l.clickOnAmountTag,
                        onClickOnSubmitButton: l.clickOnSubmitButton,
                        onClickOnDetailingButton: l.clickOnDetailingButton,
                        onHandleEvent: l.handlePaySubmit,
                        onCancel: e[2] || (e[2] = t => l.changeStep(1))
                    }, null, 8, ["amount", "fetching", "payment-method", "custom-messages", "amount-rules", "currency", "header-hint", "deposit-id", "annotation", "onUpdateTitle", "onCreateDeposit", "onCustomMessageCloseAmount", "onCustomMessageAction", "onUpdateAmount", "onClickOnAmountTag", "onClickOnSubmitButton", "onClickOnDetailingButton", "onHandleEvent"])) : l.isFormAvailable ? ((0, i.wg)(), (0, i.iD)("form", {
                        key: 8,
                        class: (0, o.C_)(t.$style.form),
                        onSubmit: (0, s.iM)(w, ["prevent"])
                    }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(n.plainRequiredFieldDescriptions, (e => ((0, i.wg)(), (0, i.j4)(g, {
                        key: e.field,
                        data: e,
                        class: (0, o.C_)(t.$style.field),
                        theme: "light-grey"
                    }, null, 8, ["data", "class"])))), 128)), (0, i.Wm)(C, {
                        "model-value": n.amount,
                        "payment-method": n.value,
                        "custom-messages": n.customMessages,
                        "amount-rules": n.amountRules,
                        currency: n.currency,
                        "show-icon": !1,
                        "onUpdate:modelValue": l.updateAmount,
                        onCustomMessageClose: l.customMessageCloseAmount,
                        onCustomMessageAction: l.customMessageAction
                    }, null, 8, ["model-value", "payment-method", "custom-messages", "amount-rules", "currency", "onUpdate:modelValue", "onCustomMessageClose", "onCustomMessageAction"]), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.limitDeposit)
                    }, [(0, i._)("div", null, (0, o.zw)(a.limit), 1), (0, i._)("div", null, (0, o.zw)(n.limitDepositText), 1)], 2), (0, i.Wm)(_, {
                        class: (0, o.C_)(t.$style.button),
                        theme: "green",
                        disabled: !n.buttonEnabled,
                        loading: n.fetching,
                        "not-prevent": "",
                        wide: "",
                        onClick: l.clickOnSubmitButton
                    }, {
                        default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(a.next), 1)])),
                        _: 2
                    }, 1032, ["class", "disabled", "loading", "onClick"])], 42, Ht)) : (0, i.kq)("", !0), n.isCurrentPaymentCrypto && 2 === t.step ? ((0, i.wg)(), (0, i.j4)(D, {
                        key: 9,
                        fetching: n.fetching,
                        "payment-method": n.value,
                        "required-fields-data": n.requiredFieldsData,
                        onCancel: e[3] || (e[3] = t => l.changeStep(1)),
                        onChangeApiResponse: l.changeApiResponse,
                        onChangeField: l.onFieldChange,
                        onCreateDeposit: e[4] || (e[4] = t => l.createDeposit({
                            isNewFlow: !0
                        })),
                        onUpdateTitle: l.updateTitle
                    }, null, 8, ["fetching", "payment-method", "required-fields-data", "onChangeApiResponse", "onChangeField", "onUpdateTitle"])) : (0, i.kq)("", !0), n.isCurrentPaymentCrypto && 3 === t.step ? ((0, i.wg)(), (0, i.j4)(f, {
                        key: 10,
                        "api-response": n.apiResponse,
                        "payment-method": n.value,
                        country: n.country,
                        onCancel: e[5] || (e[5] = t => l.changeStep(2))
                    }, null, 8, ["api-response", "payment-method", "country"])) : (0, i.kq)("", !0)], 2)])),
                    _: 1
                }, 8, ["payments", "search", "fetching", "onInput", "onCreateDeposit"])
            }
            var Lt = n(250576),
                Zt = n(901475),
                zt = n(593538),
                Gt = n(888185),
                Kt = n(287236),
                Yt = n(735866),
                Xt = n(682521);
            const Qt = ["innerHTML"];

            function Jt(t, e, n, a, r, l) {
                const u = (0, i.up)("PromoBannerIPL"),
                    d = (0, i.up)("Annotation"),
                    c = (0, i.up)("DepositModalAmount"),
                    p = (0, i.up)("AmountTags"),
                    m = (0, i.up)("BillingVideoInstruction"),
                    h = (0, i.up)("VIcon"),
                    y = (0, i.up)("VButton"),
                    g = (0, i.up)("DepositMerchantIndiaDetails"),
                    C = (0, i.up)("VPicture"),
                    _ = (0, i.up)("VDropdown"),
                    D = (0, i.up)("VInput"),
                    f = (0, i.up)("DepositMerchantIndiaImageUpload"),
                    v = (0, i.up)("DepositStatus");
                return 1 === t.step ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 0,
                    class: (0, o.C_)(t.$style.container)
                }, [(0, i.Wm)(u, {
                    class: (0, o.C_)(t.$style.annotation),
                    country: n.promoBannerIPLCountry
                }, null, 8, ["class", "country"]), n.annotation.text ? ((0, i.wg)(), (0, i.j4)(d, {
                    key: 0,
                    class: (0, o.C_)(t.$style.annotation),
                    style: (0, o.j5)(n.annotation.style)
                }, {
                    default: (0, i.w5)((() => [(0, i._)("span", {
                        innerHTML: l.sanitizedAnnotationText
                    }, null, 8, Qt)])),
                    _: 1
                }, 8, ["class", "style"])) : (0, i.kq)("", !0), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.headerHint)
                }, (0, o.zw)(n.headerHint), 3), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.subtitle)
                }, [(0, i._)("span", {
                    class: (0, o.C_)(t.$style.blue)
                }, "01 ", 2), (0, i._)("span", null, (0, o.zw)(l.text.stepOne.subtitle), 1)], 2), (0, i.Wm)(c, {
                    class: (0, o.C_)(t.$style.input),
                    "model-value": n.amount,
                    "payment-method": n.paymentMethod,
                    "custom-messages": n.customMessages,
                    "amount-rules": n.amountRules,
                    currency: n.currency,
                    "onUpdate:modelValue": l.updateAmount,
                    onCustomMessageCloseAmount: e[0] || (e[0] = e => t.$emit("customMessageCloseAmount")),
                    onCustomMessageAction: e[1] || (e[1] = e => t.$emit("customMessageAction", e)),
                    onFocusAmount: l.focusAmount
                }, null, 8, ["class", "model-value", "payment-method", "custom-messages", "amount-rules", "currency", "onUpdate:modelValue", "onFocusAmount"]), (0, i.Wm)(p, {
                    "amount-rules": n.amountRules,
                    currency: n.currency,
                    "recommended-amounts": n.paymentMethod.recommendedAmounts,
                    onChange: l.clickOnAmountTag
                }, null, 8, ["amount-rules", "currency", "recommended-amounts", "onChange"]), (0, i.Wm)(m, {
                    class: (0, o.C_)(t.$style.videoInstruction),
                    country: n.country,
                    currency: n.currency,
                    "payment-method": n.paymentMethod
                }, null, 8, ["class", "country", "currency", "payment-method"]), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.buttons)
                }, [n.isCancelable ? ((0, i.wg)(), (0, i.j4)(y, {
                    key: 0,
                    theme: "grey-light",
                    type: "button",
                    class: (0, o.C_)(t.$style.cancelButton),
                    onClick: l.cancel
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(h, {
                        icon: "chevron-left-bold",
                        size: 10
                    })])),
                    _: 1
                }, 8, ["class", "onClick"])) : (0, i.kq)("", !0), (0, i.Wm)(y, {
                    "not-prevent": "",
                    theme: "green",
                    class: (0, o.C_)(t.$style.buttonStepOne),
                    loading: t.preparationLoading,
                    disabled: a.vuelidate.form.$invalid || t.preparationLoading,
                    onClick: e[2] || (e[2] = t => l.handleDepositPrepare(n.paymentMethod.name))
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(l.text.stepOne.buttonDeposit), 1)])),
                    _: 1
                }, 8, ["class", "loading", "disabled"])], 2)], 2)) : 2 === t.step ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 1,
                    class: (0, o.C_)(t.$style.container)
                }, [(0, i._)("div", {
                    class: (0, o.C_)(t.$style.headerHint)
                }, (0, o.zw)(l.reminder), 3), (0, i.Wm)(g, {
                    details: t.details,
                    subtitle: l.text.stepTwo.subtitle
                }, null, 8, ["details", "subtitle"]), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.controls)
                }, [(0, i.Wm)(y, {
                    theme: "grey",
                    "square-size": "45px",
                    type: "button",
                    class: (0, o.C_)(t.$style.buttonBack),
                    onClick: e[3] || (e[3] = t => l.changeStep(1))
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(h, {
                        icon: "chevron-left-bold",
                        class: (0, o.C_)(t.$style.buttonBackIcon)
                    }, null, 8, ["class"])])),
                    _: 1
                }, 8, ["class"]), (0, i.Wm)(y, {
                    theme: "green",
                    "not-prevent": "",
                    class: (0, o.C_)(t.$style.buttonStepTwo),
                    onClick: e[4] || (e[4] = t => l.clickOnSecondStepButton(3, n.paymentMethod.value))
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(l.text.stepTwo.buttonDeposit), 1)])),
                    _: 1
                }, 8, ["class"])], 2)], 2)) : 3 === t.step ? ((0, i.wg)(), (0, i.iD)("div", {
                    key: 2,
                    class: (0, o.C_)(t.$style.container)
                }, [(0, i._)("form", {
                    class: (0, o.C_)(t.$style.container),
                    onSubmit: e[7] || (e[7] = (0, s.iM)(((...t) => l.sendFormIndia && l.sendFormIndia(...t)), ["prevent"]))
                }, [(0, i._)("div", {
                    class: (0, o.C_)(t.$style.headerHint)
                }, (0, o.zw)(l.text.stepThree.text), 3), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.subtitle)
                }, [(0, i._)("span", {
                    class: (0, o.C_)(t.$style.blue)
                }, "03 ", 2), (0, i._)("span", null, (0, o.zw)(l.text.stepThree.subtitle), 1)], 2), ((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(t.fields, (e => ((0, i.wg)(), (0, i.j4)(D, {
                    key: e.name,
                    modelValue: a.vuelidate.formIndia[e.name].$model,
                    "onUpdate:modelValue": t => a.vuelidate.formIndia[e.name].$model = t,
                    modelModifiers: {
                        trim: !0
                    },
                    theme: "light-grey",
                    success: !a.vuelidate.formIndia[e.name].$invalid,
                    error: a.vuelidate.formIndia[e.name].$dirty && a.vuelidate.formIndia[e.name].$invalid,
                    "error-text": e.regexError,
                    class: (0, o.C_)(t.$style.input),
                    required: !!e.regex,
                    placeholder: e.placeholder
                }, (0, i.Nv)({
                    _: 2
                }, [t.$options.instructionIndiaPictureMap[e.field] ? {
                    name: "right",
                    fn: (0, i.w5)((() => [(0, i.Wm)(_, {
                        angle: "",
                        hoverable: "",
                        align: "bottom-right",
                        padding: "4px",
                        "angle-color": "#f7f8f9",
                        class: (0, o.C_)(t.$style.questionDropdown)
                    }, {
                        trigger: (0, i.w5)((() => [(0, i.Wm)(h, {
                            icon: "question-circle",
                            class: (0, o.C_)(t.$style.questionIcon)
                        }, null, 8, ["class"])])),
                        default: (0, i.w5)((() => [(0, i.Wm)(C, {
                            picture: t.$options.instructionIndiaPictureMap[e.field],
                            class: (0, o.C_)(t.$style.instructionPicture)
                        }, null, 8, ["picture", "class"])])),
                        _: 2
                    }, 1032, ["class"])])),
                    key: "0"
                } : void 0]), 1032, ["modelValue", "onUpdate:modelValue", "success", "error", "error-text", "class", "required", "placeholder"])))), 128)), n.showReceiptUpload ? ((0, i.wg)(), (0, i.j4)(f, {
                    key: 0,
                    onFileUploaded: l.handleFileUpload
                }, null, 8, ["onFileUploaded"])) : (0, i.kq)("", !0), (0, i._)("div", {
                    class: (0, o.C_)(t.$style.controls)
                }, [(0, i.Wm)(y, {
                    theme: "grey",
                    "square-size": "45px",
                    type: "button",
                    class: (0, o.C_)(t.$style.buttonBack),
                    disabled: n.fetching,
                    onClick: e[5] || (e[5] = t => l.changeStep(2))
                }, {
                    default: (0, i.w5)((() => [(0, i.Wm)(h, {
                        icon: "chevron-left-bold",
                        class: (0, o.C_)(t.$style.buttonBackIcon)
                    }, null, 8, ["class"])])),
                    _: 1
                }, 8, ["class", "disabled"]), (0, i.Wm)(y, {
                    theme: "green",
                    "not-prevent": "",
                    class: (0, o.C_)(t.$style.buttonStepThree),
                    disabled: a.vuelidate.formIndia.$invalid || n.fetching,
                    loading: n.fetching,
                    onClick: e[6] || (e[6] = t => l.changeStep(3))
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(l.text.stepThree.buttonDeposit), 1)])),
                    _: 1
                }, 8, ["class", "disabled", "loading"])], 2)], 34)], 2)) : 4 === t.step ? ((0, i.wg)(), (0, i.j4)(v, {
                    key: 3,
                    "deposit-id": n.depositId
                }, null, 8, ["deposit-id"])) : (0, i.kq)("", !0)
            }
            var te = n(405705),
                ee = n(510760),
                ne = n(354396),
                ie = n(182284),
                oe = n(123543),
                se = n(644918),
                ae = n(555496);
            const re = ["onClick"];

            function le(t, e, n, s, a, r) {
                const l = (0, i.up)("QRCode"),
                    u = (0, i.up)("VIcon"),
                    d = (0, i.up)("BaseDepositMerchantIndiaDetails");
                return (0, i.wg)(), (0, i.j4)(d, null, {
                    default: (0, i.w5)((({
                        copyDetail: e
                    }) => [(0, i._)("div", {
                        class: (0, o.C_)(t.$style.information)
                    }, [(0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationTitle)
                    }, [(0, i._)("span", {
                        class: (0, o.C_)(t.$style.blue)
                    }, "02 ", 2), (0, i._)("span", null, (0, o.zw)(n.subtitle), 1)], 2), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationCards)
                    }, [((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(r.items, (n => ((0, i.wg)(), (0, i.iD)("div", {
                        key: n.name,
                        class: (0, o.C_)(n.isQr ? t.$style.informationCardQr : t.$style.informationCard)
                    }, [n.isQr ? ((0, i.wg)(), (0, i.iD)(i.HY, {
                        key: 0
                    }, [(0, i.Wm)(l, {
                        class: (0, o.C_)(t.$style.qr),
                        text: n.value
                    }, null, 8, ["class", "text"]), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationName)
                    }, (0, o.zw)(n.name), 3), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationValue)
                    }, (0, o.zw)(t.$store.getters.getWordByKey("common.deposit.qrCode.disclaimer")), 3)], 64)) : ((0, i.wg)(), (0, i.iD)(i.HY, {
                        key: 1
                    }, [(0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationCardTop)
                    }, [(0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationName)
                    }, (0, o.zw)(n.name), 3), n.type === t.$options.DETAILS_TYPE_COPIED_TEXT ? ((0, i.wg)(), (0, i.iD)("button", {
                        key: 0,
                        class: (0, o.C_)(t.$style.copy),
                        type: "button",
                        onClick: t => e(n)
                    }, [(0, i.Wm)(u, {
                        icon: "copy",
                        class: (0, o.C_)(t.$style.copyIcon)
                    }, null, 8, ["class"])], 10, re)) : (0, i.kq)("", !0)], 2), (0, i._)("div", {
                        class: (0, o.C_)(t.$style.informationValue)
                    }, (0, o.zw)(n.value), 3)], 64))], 2)))), 128))], 2)], 2)])),
                    _: 1
                })
            }
            var ue = n(267294),
                de = n(8832),
                ce = Object.defineProperty,
                pe = Object.defineProperties,
                me = Object.getOwnPropertyDescriptors,
                he = Object.getOwnPropertySymbols,
                ye = Object.prototype.hasOwnProperty,
                ge = Object.prototype.propertyIsEnumerable,
                Ce = (t, e, n) => e in t ? ce(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                _e = (t, e) => {
                    for (var n in e || (e = {})) ye.call(e, n) && Ce(t, n, e[n]);
                    if (he)
                        for (var n of he(e)) ge.call(e, n) && Ce(t, n, e[n]);
                    return t
                },
                De = (t, e) => pe(t, me(e));
            const fe = {
                    components: {
                        BaseDepositMerchantIndiaDetails: ue.Z,
                        QRCode: de.Z,
                        VIcon: k.Z
                    },
                    props: {
                        details: {
                            type: Array,
                            default: () => []
                        },
                        subtitle: {
                            type: String,
                            default: null
                        }
                    },
                    computed: {
                        items() {
                            return this.details.map((t => De(_e({}, t), {
                                isQr: t.type === vt.YS
                            })))
                        }
                    },
                    DETAILS_TYPE_COPIED_TEXT: vt.d6
                },
                ve = {
                    information: "DepositMerchantIndiaDetails_information_O2mdO",
                    informationTitle: "DepositMerchantIndiaDetails_informationTitle_tkdc3",
                    blue: "DepositMerchantIndiaDetails_blue_ozmPF",
                    informationCards: "DepositMerchantIndiaDetails_informationCards_XRfMM",
                    informationCard: "DepositMerchantIndiaDetails_informationCard_cyfY9",
                    informationCardQr: "DepositMerchantIndiaDetails_informationCardQr_uZ5ny DepositMerchantIndiaDetails_informationCard_cyfY9",
                    informationCardTop: "DepositMerchantIndiaDetails_informationCardTop_a3WtN",
                    copy: "DepositMerchantIndiaDetails_copy_GVuxC",
                    copyIcon: "DepositMerchantIndiaDetails_copyIcon_gJ9Tt",
                    qr: "DepositMerchantIndiaDetails_qr_G0wIq",
                    informationName: "DepositMerchantIndiaDetails_informationName_DkZyH",
                    informationValue: "DepositMerchantIndiaDetails_informationValue_N5Y4_"
                },
                we = {};
            we["$style"] = ve;
            const ke = (0, T.Z)(fe, [
                    ["render", le],
                    ["__cssModules", we]
                ]),
                be = ke;
            var Ae = n(894710),
                Ie = (t, e, n) => new Promise(((i, o) => {
                    var s = t => {
                            try {
                                r(n.next(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        a = t => {
                            try {
                                r(n.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        r = t => t.done ? i(t.value) : Promise.resolve(t.value).then(s, a);
                    r((n = n.apply(t, e)).next())
                }));
            const Me = {
                    1: "stepOne",
                    2: "stepTwo",
                    3: "stepThree",
                    4: "stepFour"
                },
                Be = {
                    name: "DepositMerchantIndia",
                    components: {
                        DepositStatus: ie.Z,
                        DepositMerchantIndiaImageUpload: ne["default"],
                        AmountTags: m.Z,
                        BillingVideoInstruction: C.Z,
                        DepositMerchantIndiaDetails: be,
                        DepositModalAmount: Vt.Z,
                        VInput: Dt.Z,
                        VButton: X.Z,
                        VDropdown: oe.w,
                        VPicture: se.Z,
                        VIcon: k.Z,
                        Annotation: h.Z,
                        PromoBannerIPL: Ct.Z
                    },
                    inject: ["$modal", "$notify", "parseError"],
                    props: {
                        amount: {
                            type: [Number, String],
                            default: null
                        },
                        fetching: {
                            type: Boolean
                        },
                        paymentMethod: {
                            type: Object,
                            default: null
                        },
                        amountRules: {
                            type: Object,
                            default: null
                        },
                        customMessages: {
                            type: Object,
                            default: null
                        },
                        country: {
                            type: [String, void 0],
                            default: ""
                        },
                        currency: {
                            type: String,
                            default: null,
                            validator: ft.HN
                        },
                        depositId: {
                            type: Number,
                            default: void 0
                        },
                        headerHint: {
                            type: String,
                            default: null
                        },
                        isCancelable: {
                            type: Boolean,
                            default: !1
                        },
                        showReceiptUpload: {
                            type: Boolean,
                            default: !1
                        },
                        annotation: {
                            type: Object,
                            default: () => ({})
                        },
                        promoBannerIPLCountry: {
                            type: String,
                            default: null
                        }
                    },
                    emits: ["createDeposit", "customMessageAction", "customMessageCloseAmount", "onFieldChange", "updateAmount", "updateTitle", "clickOnAmountTag", "clickOnSubmitButton", "handleEvent", "cancel", "handleFileUpload", "focusAmount"],
                    setup() {
                        return {
                            vuelidate: (0, te.Xw)(),
                            bonusStore: (0, Bt.gD)()
                        }
                    },
                    validations() {
                        const {
                            isNewBonusBalance: t
                        } = this.bonusStore;
                        return {
                            form: {
                                amount: {
                                    required: ee.C1,
                                    minValue: (0, ee.uv)(t ? this.depositMin : this.amountRules.min),
                                    maxValue: (0, ee.PW)(this.amountRules.max)
                                }
                            },
                            formIndia: Object.fromEntries(this.fields.map((({
                                name: t,
                                regex: e
                            }) => {
                                const n = new RegExp(null != e ? e : ""),
                                    i = t => n.test(t);
                                return [t, {
                                    valid: i
                                }]
                            })))
                        }
                    },
                    data: () => ({
                        step: 1,
                        form: {
                            amount: ""
                        },
                        formIndia: {},
                        isSendingFormTwo: !1,
                        preparationLoading: !1,
                        details: [],
                        fields: []
                    }),
                    computed: {
                        text() {
                            return this.$store.getters.lang.paymentIndiaUpdated
                        },
                        formIndiaJson() {
                            return JSON.stringify(this.formIndia)
                        },
                        paymentName() {
                            var t;
                            return (null == (t = this.$store.getters.langCommon.paymentMethod[this.paymentMethod.value]) ? void 0 : t.name) || ""
                        },
                        reminder() {
                            return (0, J.Uw)(this.text.stepTwo.text, this.paymentName)
                        },
                        isActivatedBonus() {
                            return !!this.bonusStore.depositBonusId
                        },
                        depositBonusApplier() {
                            return this.bonusStore.availableBonuses.find((({
                                id: t
                            }) => t === this.bonusStore.depositBonusId))
                        },
                        hideBonusLimit() {
                            var t;
                            const {
                                minDeposit: e,
                                maxDeposit: n
                            } = null != (t = this.depositBonusApplier) ? t : {};
                            return this.amountRules.max < e || this.amountRules.min > n
                        },
                        depositMin() {
                            var t, e;
                            const n = (null == (t = this.depositBonusApplier) ? void 0 : t.minDeposit) > this.amountRules.min;
                            return this.isActivatedBonus && !this.hideBonusLimit && n ? null == (e = this.depositBonusApplier) ? void 0 : e.minDeposit : this.amountRules.min
                        },
                        sanitizedAnnotationText() {
                            return c().sanitize(this.annotation.text, {
                                ADD_ATTR: ["target"]
                            })
                        }
                    },
                    watch: {
                        step: {
                            immediate: !0,
                            handler(t) {
                                this.$emit("updateTitle", this.text[Me[t]].title)
                            }
                        },
                        formIndiaJson: {
                            handler() {
                                for (const [t, e] of Object.entries(this.formIndia)) this.$emit("onFieldChange", [t, e])
                            }
                        },
                        amount: {
                            immediate: !0,
                            handler(t) {
                                this.form.amount = t
                            }
                        },
                        paymentMethod: {
                            immediate: !0,
                            handler() {
                                return Ie(this, null, (function*() {
                                    var t, e;
                                    this.changeStep(1), this.preparationLoading = !1, this.details = [], this.fields = [], this.formIndia = {}, null == (e = (t = this.vuelidate).$reset) || e.call(t)
                                }))
                            }
                        }
                    },
                    beforeUnmount() {
                        this.$emit("updateTitle", null)
                    },
                    methods: {
                        sendFormIndia() {
                            this.vuelidate.formIndia.$invalid || this.fetching || (this.clickOnSubmitButton(), this.$emit("createDeposit"))
                        },
                        prepareDeposit(t) {
                            return Ie(this, null, (function*() {
                                try {
                                    this.preparationLoading = !0;
                                    const {
                                        data: e
                                    } = yield this.$store.dispatch("depositPrepare", t);
                                    return e
                                } catch (e) {
                                    const t = this.parseError(e);
                                    this.$notify.error(t)
                                } finally {
                                    this.preparationLoading = !1
                                }
                                return null
                            }))
                        },
                        handleDepositPrepare(t) {
                            return Ie(this, null, (function*() {
                                var e;
                                if (null == (e = $t.appConfig.modules.payments) ? void 0 : e.depositDisabled) return void this.$modal.openOver(Ae.y2, {
                                    closeOnBackgroundClick: !1
                                });
                                const {
                                    details: n,
                                    fields: i
                                } = yield this.prepareDeposit(t);
                                this.details = n, this.fields = i, this.formIndia = Object.fromEntries(i.map((({
                                    name: t
                                }) => [t, ""]))), this.changeStep(2)
                            }))
                        },
                        changeStep(t) {
                            this.step = t
                        },
                        clickOnAmountTag(t) {
                            this.$emit("clickOnAmountTag", t)
                        },
                        clickOnSubmitButton() {
                            this.$emit("clickOnSubmitButton")
                        },
                        clickOnSecondStepButton(t, e) {
                            this.changeStep(t), this.handleEvent(e)
                        },
                        handleEvent(t) {
                            this.$emit("handleEvent", t)
                        },
                        updateAmount(t, e) {
                            this.$emit("updateAmount", t, e)
                        },
                        onSuccessDeposit() {
                            this.changeStep(4)
                        },
                        cancel() {
                            this.$emit("cancel")
                        },
                        handleFileUpload(t) {
                            this.$emit("handleFileUpload", t)
                        },
                        focusAmount() {
                            this.$emit("focusAmount")
                        }
                    },
                    instructionIndiaPictureMap: ae.i
                },
                Pe = {
                    container: "DepositMerchantIndia_container_mi7lw",
                    input: "DepositMerchantIndia_input_sfN7q",
                    videoInstruction: "DepositMerchantIndia_videoInstruction_xX9ur",
                    controls: "DepositMerchantIndia_controls_mCuLQ",
                    buttons: "DepositMerchantIndia_buttons_Vys5O",
                    cancelButton: "DepositMerchantIndia_cancelButton_Z7Ii9",
                    button: "DepositMerchantIndia_button_aAOE2",
                    buttonStepOne: "DepositMerchantIndia_buttonStepOne_qo4Bq DepositMerchantIndia_button_aAOE2",
                    buttonStepTwo: "DepositMerchantIndia_buttonStepTwo_UfRhl DepositMerchantIndia_button_aAOE2",
                    buttonStepThree: "DepositMerchantIndia_buttonStepThree_wbTqN DepositMerchantIndia_button_aAOE2",
                    buttonBack: "DepositMerchantIndia_buttonBack_ck9XI",
                    buttonBackIcon: "DepositMerchantIndia_buttonBackIcon_Klhb0",
                    questionDropdown: "DepositMerchantIndia_questionDropdown_LtcAn",
                    questionIcon: "DepositMerchantIndia_questionIcon_pZbZc",
                    instructionPicture: "DepositMerchantIndia_instructionPicture_EDMqY",
                    subtitle: "DepositMerchantIndia_subtitle_PHIdo",
                    blue: "DepositMerchantIndia_blue_r9Pmq",
                    headerHint: "DepositMerchantIndia_headerHint_DJH5b",
                    annotation: "DepositMerchantIndia_annotation_bQ6MV"
                },
                Se = {};
            Se["$style"] = Pe;
            const Oe = (0, T.Z)(Be, [
                    ["render", Jt],
                    ["__cssModules", Se]
                ]),
                Te = Oe;
            var $e = n(228843),
                Fe = n(42316),
                Re = Object.defineProperty,
                qe = Object.defineProperties,
                xe = Object.getOwnPropertyDescriptors,
                Ee = Object.getOwnPropertySymbols,
                We = Object.prototype.hasOwnProperty,
                Ne = Object.prototype.propertyIsEnumerable,
                Ve = (t, e, n) => e in t ? Re(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                Ue = (t, e) => {
                    for (var n in e || (e = {})) We.call(e, n) && Ve(t, n, e[n]);
                    if (Ee)
                        for (var n of Ee(e)) Ne.call(e, n) && Ve(t, n, e[n]);
                    return t
                },
                He = (t, e) => qe(t, xe(e));
            const je = {
                    name: "DepositPaymentsGroup",
                    components: {
                        BillingVideoInstruction: C.Z,
                        CryptoDeposit: zt.Z,
                        CryptoGroup: Gt.Z,
                        DepositPeerToPeer: v.Z,
                        BaseDepositPaymentsGroup: Zt.Z,
                        FadeContainerScroll: Kt.Z,
                        DepositModalAmount: Vt.Z,
                        PaymentTile: $e.Z,
                        VDynamicField: Fe.Z,
                        VInputSearch: Yt.Z,
                        VButton: X.Z,
                        DepositMerchantIndia: Te,
                        Annotation: h.Z
                    },
                    props: {
                        value: {
                            type: Object,
                            default: null
                        },
                        card: {
                            type: Object,
                            required: !0
                        },
                        amount: {
                            type: [Number, String],
                            default: null
                        },
                        apiResponse: {
                            type: [Object, null],
                            default: null
                        },
                        customMessages: {
                            type: Object,
                            required: !0
                        },
                        amountRules: {
                            type: Object,
                            required: !0
                        },
                        currency: {
                            type: String,
                            required: !0,
                            validator: ft.HN
                        },
                        depositId: {
                            type: Number,
                            default: void 0
                        },
                        buttonEnabled: {
                            type: Boolean
                        },
                        fetching: {
                            type: Boolean
                        },
                        showBankCardPayments: {
                            type: Boolean,
                            required: !0
                        },
                        isCurrentPaymentCrypto: {
                            type: Boolean,
                            required: !0
                        },
                        initialFields: {
                            type: Object,
                            required: !0
                        },
                        isCurrentPaymentIndia: {
                            type: Boolean,
                            required: !0
                        },
                        isRequiredFieldsValid: {
                            type: Boolean,
                            required: !0
                        },
                        requiredFieldsData: {
                            type: Object,
                            default: () => ({})
                        },
                        plainRequiredFieldDescriptions: {
                            type: Array,
                            default: () => []
                        },
                        headerHint: {
                            type: String,
                            default: ""
                        },
                        isActivatedBonus: Boolean,
                        limitDepositText: {
                            type: String,
                            default: null
                        },
                        defaultAmount: {
                            type: Number,
                            default: null
                        },
                        country: {
                            type: String,
                            default: null
                        },
                        annotation: {
                            type: Object,
                            default: () => ({})
                        },
                        noticeKey: {
                            type: String,
                            default: void 0
                        },
                        paymentSessionId: {
                            type: String,
                            default: void 0
                        }
                    },
                    emits: ["createDeposit", "customMessageAction", "customMessageCloseAmount", "input", "setRequiredFields", "updateAmount", "updateTitle", "clickOnAmountTag", "clickOnCardType", "clickOnCryptoType", "clickOnSubmitButton", "onFieldChange", "changeApiResponse", "clickOnDetailingButton", "handlePaySubmit", "fetchUserDataPaymentSnippet", "focusAmount"],
                    data: () => ({
                        step: 1,
                        search: "",
                        cryptoVideoUrl: Xt.e
                    }),
                    computed: {
                        title() {
                            return {
                                [vt.um.CRYPTO]: this.cryptoTitles[this.step],
                                [vt.um.CASH]: this.$store.getters.lang.deposit.modal.titleDepositCash,
                                [vt.um.BANKS_MALAYSIA]: this.$store.getters.lang.deposit.modal.titleDepositBanksMalaysia,
                                [vt.um.BANKS_THAILAND]: this.$store.getters.lang.deposit.modal.titleDepositBanksThailand,
                                [vt.um.BANKS_THAILAND_QR]: this.$store.getters.lang.deposit.modal.titleDepositBanksThailandQR,
                                [vt.um.BANKS_INDONESIA]: this.$store.getters.lang.deposit.modal.titleDepositBanksIndonesia,
                                [vt.um.INDIAN_METHODS]: this.$store.getters.lang.deposit.modal.titleDepositBanksIndia,
                                [vt.um.P2P_UKRAINE]: this.$store.getters.lang.deposit.modal.titleDepositCashUkraine,
                                [vt.um.P2P_RUSSIA_BANKS]: this.$store.getters.lang.deposit.modal.titleDepositCashRussiaBanks,
                                [vt.um.P2P_KYRGYZSTAN]: this.$store.getters.lang.deposit.modal.titleDepositCashKyrgyzstan,
                                [vt.um.CASH_ASTROPAY_COLUMBIA]: this.$store.getters.lang.deposit.modal.titleDepositCashAstropayColumbia,
                                [vt.um.CASH_ASTROPAY_CHILE]: this.$store.getters.lang.deposit.modal.titleDepositCashAstropayChile,
                                [vt.um.BANKS_VIETNAM]: this.$store.getters.lang.deposit.modal.titleDepositBanksVietnam,
                                [vt.um.VA_INDONESIA]: this.$store.getters.lang.deposit.modal.titleDepositBanksIndonesiaVA,
                                [vt.um.BANKS_PERU]: this.$store.getters.lang.deposit.modal.titleDepositBanksPeru,
                                [vt.um.CASH_PERU]: this.$store.getters.lang.deposit.modal.titleDepositCashPeru,
                                [vt.um.CASH_GUATEMALA]: this.$store.getters.lang.deposit.modal.titleDepositCashGuatemala,
                                [vt.um.CASH_KASNET_TAMBO]: this.$store.getters.lang.deposit.modal.titleDepositCashKasnetTamboPeru,
                                [vt.um.NIGERIAN_CARDS]: this.$store.getters.lang.deposit.modal.titleDepositNigerianCards,
                                [vt.um.P2P_RUSSIA]: this.$store.getters.lang.deposit.modal.titleDepositP2PRussia,
                                [vt.um.P2P_TURKEY]: this.$store.getters.lang.deposit.modal.titleDepositP2PTurkey,
                                [vt.um.P2P_AZERBAIJAN]: this.$store.getters.lang.deposit.modal.titleDepositP2PAzerbaijan,
                                [vt.um.BANKS_UKRAINE]: this.$store.getters.lang.deposit.modal.titleDepositCashUkraine,
                                [vt.um.BANKS_AZERBAIJAN]: this.$store.getters.lang.deposit.modal.titleDepositCashAzerbaijan,
                                [vt.um.MOBILE_WALLETS]: this.$store.getters.lang.deposit.modal.titleDepositMobileWallets,
                                [vt.um.AFRICA_MOBILE]: this.$store.getters.lang.deposit.modal.titleDepositAfricaMobile,
                                [vt.um.CASH_ECUADOR]: this.$store.getters.lang.deposit.modal.titleDepositCashEcuador,
                                [vt.um.SBP_TRANSGRAN]: this.$store.getters.lang.deposit.modal.titleDepositSbpTransgran,
                                [vt.um.CASH_CHILE]: this.$store.getters.lang.deposit.modal.titleDepositCashChile,
                                [vt.um.CASH_CHILE_REDIRECT]: this.$store.getters.lang.deposit.modal.titleDepositCashChile,
                                [vt.um.P2P_TAJIKISTAN]: this.$store.getters.lang.deposit.modal.titleDepositP2PTajikistan,
                                [vt.um.MOROCCO_BANK_TRANSFER]: this.$store.getters.lang.deposit.modal.titleDepositMoroccoBankTransfer,
                                [vt.um.INDONESIA_DANA]: this.$store.getters.lang.deposit.modal.titleIndonesiaDanaGrouped,
                                [vt.um.RCGCARD]: this.$store.getters.lang.deposit.modal.titleDepositRcgCard,
                                [vt.um.ONLINE_ECUADOR_BANKS]: this.$store.getters.lang.deposit.modal.titleOnlineEcuadorBanks,
                                [vt.um.T_PAY_ONECLICK]: this.$store.getters.lang.deposit.modal.titleTPayOneClick
                            }[this.card.groupCategory]
                        },
                        cryptoTitles() {
                            return {
                                stepOne: this.$store.getters.lang.deposit.modal.titleDepositCrypto,
                                stepTwo: this.$store.getters.lang.deposit.modal.titleDepositCryptoNetwork,
                                stepThree: null
                            }
                        },
                        cardPayments() {
                            return this.card.payments.map((t => {
                                var e, n;
                                return He(Ue({}, t), {
                                    label: null != (n = null == (e = this.$store.getters.langCommon.paymentMethod[t.name]) ? void 0 : e.text) ? n : t.label
                                })
                            }))
                        },
                        isFormAvailable() {
                            const t = this.isCurrentPaymentCrypto || this.isCurrentPaymentIndia;
                            return this.value && !t
                        },
                        showAnnotation() {
                            return !!this.annotation.text && !this.isCurrentPaymentCrypto && !this.formType(Q.neF.P2P)
                        },
                        showPaymentTiles() {
                            return 1 === this.step
                        },
                        sanitizedAnnotationText() {
                            return c().sanitize(this.annotation.text, {
                                ADD_ATTR: ["target"]
                            })
                        }
                    },
                    methods: {
                        paymentTileIsActive(t) {
                            return !this.isCurrentPaymentCrypto && !this.isCurrentPaymentIndia && this.isActivePayment(t)
                        },
                        formType(t) {
                            var e;
                            return this.value && (null == (e = this.value) ? void 0 : e.cardViewType) === t
                        },
                        clickOnAmountTag(t) {
                            this.$emit("clickOnAmountTag", t)
                        },
                        clickOnSubmitButton() {
                            this.$emit("clickOnSubmitButton")
                        },
                        clickOnCardType(t) {
                            this.$emit("clickOnCardType", t)
                        },
                        clickOnCryptoType(t) {
                            this.$emit("clickOnCryptoType", t)
                        },
                        changePayment(t) {
                            this.$emit("input", t);
                            const e = null == t ? void 0 : t.prefilledAmount;
                            e || this.$emit("fetchUserDataPaymentSnippet"), this.isCurrentPaymentCrypto ? this.clickOnCryptoType(t) : this.clickOnCardType(t)
                        },
                        customMessageAction(t) {
                            this.$emit("customMessageAction", t)
                        },
                        setRequiredFields(t) {
                            this.$emit("setRequiredFields", t)
                        },
                        updateAmount(t, e) {
                            this.$emit("updateAmount", t, e)
                        },
                        updateTitle(t) {
                            this.$emit("updateTitle", t)
                        },
                        isActivePayment(t) {
                            return (0, Lt.Z)(t, this.value)
                        },
                        createDeposit(t) {
                            this.$emit("createDeposit", t)
                        },
                        changeApiResponse(t) {
                            this.$emit("changeApiResponse", t)
                        },
                        onFieldChange(t, e) {
                            this.$emit("onFieldChange", t, e)
                        },
                        customMessageCloseAmount() {
                            this.$emit("customMessageCloseAmount")
                        },
                        clickOnDetailingButton() {
                            this.$emit("clickOnDetailingButton")
                        },
                        handlePaySubmit() {
                            this.$emit("handlePaySubmit")
                        },
                        changeStep(t) {
                            this.step = t
                        },
                        onSuccessDeposit() {
                            this.formType(Q.neF.PAY_TM) && this.$refs.depositMerchantIndia ? this.$refs.depositMerchantIndia.onSuccessDeposit() : this.changeStep(3)
                        },
                        handleTileClick(t, e) {
                            e(t), (this.isCurrentPaymentCrypto || this.isCurrentPaymentIndia) && this.changeStep(2)
                        },
                        onFocusAmount() {
                            this.$emit("focusAmount")
                        }
                    },
                    CARD_VIEW: Q.neF
                },
                Le = {
                    container: "DepositPaymentsGroup_container_r5Vnl",
                    containerHeight: "DepositPaymentsGroup_containerHeight_IJDDA",
                    list: "DepositPaymentsGroup_list_qmjql",
                    tile: "DepositPaymentsGroup_tile_b0P3T",
                    notFound: "DepositPaymentsGroup_notFound_fPr6U",
                    input: "DepositPaymentsGroup_input_Y9w_D",
                    button: "DepositPaymentsGroup_button_i0Kll",
                    limitDeposit: "DepositPaymentsGroup_limitDeposit_KQARS",
                    field: "DepositPaymentsGroup_field_cyIK6",
                    form: "DepositPaymentsGroup_form_JCmTR",
                    title: "DepositPaymentsGroup_title_Ov6aL",
                    annotation: "DepositPaymentsGroup_annotation_TzX0s",
                    cryptoInstruction: "DepositPaymentsGroup_cryptoInstruction_GOJh_"
                },
                Ze = {};
            Ze["$style"] = Le;
            const ze = (0, T.Z)(je, [
                    ["render", jt],
                    ["__cssModules", Ze]
                ]),
                Ge = ze,
                Ke = ["innerHTML"];

            function Ye(t, e, n, s, a, r) {
                const l = (0, i.up)("PromoBannerIPL"),
                    u = (0, i.up)("Annotation"),
                    d = (0, i.up)("DepositModalAmount"),
                    c = (0, i.up)("AmountTags"),
                    p = (0, i.up)("BillingVideoInstruction"),
                    m = (0, i.up)("VButton");
                return (0, i.wg)(), (0, i.iD)("div", null, [(0, i.Wm)(l, {
                    class: (0, o.C_)(t.$style.annotation),
                    country: n.promoBannerIPLCountry
                }, null, 8, ["class", "country"]), n.annotation.text ? ((0, i.wg)(), (0, i.j4)(u, {
                    key: 0,
                    class: (0, o.C_)(t.$style.annotation),
                    style: (0, o.j5)(n.annotation.style)
                }, {
                    default: (0, i.w5)((() => [(0, i._)("span", {
                        innerHTML: r.sanitizedAnnotationText
                    }, null, 8, Ke)])),
                    _: 1
                }, 8, ["class", "style"])) : (0, i.kq)("", !0), (0, i._)("p", {
                    class: (0, o.C_)(t.$style.headerHint)
                }, (0, o.zw)(n.headerHint), 3), (0, i._)("h3", {
                    class: (0, o.C_)(t.$style.subtitle)
                }, [(0, i._)("span", {
                    class: (0, o.C_)(t.$style.blue)
                }, "01", 2), (0, i._)("span", null, (0, o.zw)(r.text.subtitle), 1)], 2), (0, i.Wm)(d, {
                    class: (0, o.C_)(t.$style.input),
                    "model-value": n.amount,
                    currency: n.currency,
                    "amount-rules": n.amountRules,
                    "payment-method": n.paymentMethod,
                    "custom-messages": n.customMessages,
                    "onUpdate:modelValue": r.updateAmount,
                    onCustomMessageClose: e[0] || (e[0] = t => r.customMessageClose("amountError")),
                    onCustomMessageAction: r.customMessageAction,
                    onFocusAmount: r.focusAmount
                }, null, 8, ["class", "model-value", "currency", "amount-rules", "payment-method", "custom-messages", "onUpdate:modelValue", "onCustomMessageAction", "onFocusAmount"]), (0, i.Wm)(c, {
                    "amount-rules": n.amountRules,
                    currency: n.currency,
                    "recommended-amounts": n.paymentMethod.recommendedAmounts,
                    onChange: r.clickOnAmountTag
                }, null, 8, ["amount-rules", "currency", "recommended-amounts", "onChange"]), (0, i.Wm)(p, {
                    class: (0, o.C_)(t.$style.videoInstruction),
                    country: n.country,
                    currency: n.currency,
                    "payment-method": n.paymentMethod
                }, null, 8, ["class", "country", "currency", "payment-method"]), (0, i.Wm)(m, {
                    "not-prevent": "",
                    theme: "green",
                    class: (0, o.C_)(t.$style.button),
                    loading: n.fetching,
                    disabled: s.vuelidate.form.$invalid,
                    onClick: r.createDeposit
                }, {
                    default: (0, i.w5)((() => [(0, i.Uk)((0, o.zw)(r.text.button), 1)])),
                    _: 1
                }, 8, ["class", "loading", "disabled", "onClick"])])
            }
            const Xe = {
                    name: "DepositMerchantEazepeDesktopData",
                    components: {
                        AmountTags: m.Z,
                        BillingVideoInstruction: C.Z,
                        VButton: X.Z,
                        DepositModalAmount: Vt.Z,
                        Annotation: h.Z,
                        PromoBannerIPL: Ct.Z
                    },
                    props: {
                        amount: {
                            type: [Number, String],
                            default: null
                        },
                        country: {
                            type: [String, void 0],
                            default: ""
                        },
                        currency: {
                            type: String,
                            default: null,
                            validator: ft.HN
                        },
                        fetching: {
                            type: Boolean,
                            default: !1
                        },
                        headerHint: {
                            type: String,
                            default: null
                        },
                        amountRules: {
                            type: Object,
                            default: () => ({})
                        },
                        paymentMethod: {
                            type: Object,
                            default: () => ({})
                        },
                        customMessages: {
                            type: Object,
                            default: () => ({})
                        },
                        annotation: {
                            type: Object,
                            default: () => ({})
                        },
                        promoBannerIPLCountry: {
                            type: String,
                            default: null
                        }
                    },
                    emits: ["updateAmount", "updateTitle", "createDeposit", "clickOnAmountTag", "customMessageClose", "customMessageAction", "focusAmount"],
                    setup() {
                        return {
                            vuelidate: (0, te.Xw)(),
                            bonusStore: (0, Bt.gD)()
                        }
                    },
                    validations() {
                        const {
                            isNewBonusBalance: t
                        } = this.bonusStore;
                        return {
                            form: {
                                amount: {
                                    required: ee.C1,
                                    minValue: (0, ee.uv)(t ? this.depositMin : this.amountRules.min),
                                    maxValue: (0, ee.PW)(this.amountRules.max)
                                }
                            }
                        }
                    },
                    data: () => ({
                        form: {
                            amount: null
                        }
                    }),
                    computed: {
                        text() {
                            return this.$store.getters.lang.paymentEazepe.data
                        },
                        isActivatedBonus() {
                            return !!this.bonusStore.depositBonusId
                        },
                        depositBonusApplier() {
                            return this.bonusStore.availableBonuses.find((({
                                id: t
                            }) => t === this.bonusStore.depositBonusId))
                        },
                        hideBonusLimit() {
                            var t;
                            const {
                                minDeposit: e,
                                maxDeposit: n
                            } = null != (t = this.depositBonusApplier) ? t : {};
                            return this.amountRules.max < e || this.amountRules.min > n
                        },
                        depositMin() {
                            var t, e;
                            const n = (null == (t = this.depositBonusApplier) ? void 0 : t.minDeposit) > this.amountRules.min;
                            return this.isActivatedBonus && !this.hideBonusLimit && n ? null == (e = this.depositBonusApplier) ? void 0 : e.minDeposit : this.amountRules.min
                        },
                        sanitizedAnnotationText() {
                            return c().sanitize(this.annotation.text, {
                                ADD_ATTR: ["target"]
                            })
                        }
                    },
                    watch: {
                        amount: {
                            immediate: !0,
                            handler(t) {
                                this.form.amount = t
                            }
                        }
                    },
                    created() {
                        this.updateTitle(this.text.title)
                    },
                    methods: {
                        updateAmount(t, e) {
                            this.$emit("updateAmount", t, e)
                        },
                        updateTitle(t) {
                            this.$emit("updateTitle", t)
                        },
                        createDeposit() {
                            this.$emit("createDeposit")
                        },
                        clickOnAmountTag(t) {
                            this.$emit("clickOnAmountTag", t)
                        },
                        customMessageClose(t) {
                            this.$emit("customMessageClose", t)
                        },
                        customMessageAction(t) {
                            this.$emit("customMessageAction", t)
                        },
                        focusAmount() {
                            this.$emit("focusAmount")
                        }
                    }
                },
                Qe = {
                    subtitle: "DepositMerchantEazepeData_subtitle_ryb1M",
                    blue: "DepositMerchantEazepeData_blue_CA5Cv",
                    headerHint: "DepositMerchantEazepeData_headerHint_Z2iBq",
                    input: "DepositMerchantEazepeData_input_mhPCw",
                    videoInstruction: "DepositMerchantEazepeData_videoInstruction_iqZoi",
                    button: "DepositMerchantEazepeData_button_aqpsn",
                    annotation: "DepositMerchantEazepeData_annotation_LyAAY"
                },
                Je = {};
            Je["$style"] = Qe;
            const tn = (0, T.Z)(Xe, [
                    ["render", Ye],
                    ["__cssModules", Je]
                ]),
                en = tn;
            var nn = n(789174),
                on = n(542137),
                sn = n(431940),
                an = n(531047),
                rn = n(723852),
                ln = Object.defineProperty,
                un = Object.defineProperties,
                dn = Object.getOwnPropertyDescriptors,
                cn = Object.getOwnPropertySymbols,
                pn = Object.prototype.hasOwnProperty,
                mn = Object.prototype.propertyIsEnumerable,
                hn = (t, e, n) => e in t ? ln(t, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: n
                }) : t[e] = n,
                yn = (t, e) => {
                    for (var n in e || (e = {})) pn.call(e, n) && hn(t, n, e[n]);
                    if (cn)
                        for (var n of cn(e)) mn.call(e, n) && hn(t, n, e[n]);
                    return t
                },
                gn = (t, e) => un(t, dn(e)),
                Cn = (t, e, n) => new Promise(((i, o) => {
                    var s = t => {
                            try {
                                r(n.next(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        a = t => {
                            try {
                                r(n.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        },
                        r = t => t.done ? i(t.value) : Promise.resolve(t.value).then(s, a);
                    r((n = n.apply(t, e)).next())
                }));
            const _n = {
                    components: {
                        Annotation: h.Z,
                        PaymentCopyright: gt.Z,
                        DepositMoney: f.Z,
                        DepositPeerToPeer: v.Z,
                        NoPaymentsPage: yt.Z,
                        DepositHostToHost: D.Z,
                        DepositUnifiedForm: w.Z,
                        DepositModalAmount: Vt.Z,
                        DepositMerchantIndia: Te,
                        DepositInstructionDesktop: ht,
                        AmountTags: m.Z,
                        BillingVideoInstruction: C.Z,
                        ModalAsidePaymentSelect: nn.Z,
                        License: sn.Z,
                        VButton: X.Z,
                        VInput: Dt.Z,
                        VDynamicField: Fe.Z,
                        VModalWhite: on.Z,
                        DetailingButton: an.Z,
                        BankCard: y.Z,
                        BankCardWalletOnly: g.Z,
                        VIcon: k.Z,
                        CardTypeSelect: _.Z,
                        DepositCustomPage: Nt,
                        DepositPaymentsGroup: Ge,
                        DepositMerchantEazepeDesktopData: en,
                        QrCodeDepositInstructions: _t.Z,
                        VLoader: rn.Z,
                        PromoBannerIPL: Ct.Z
                    },
                    mixins: [At.Z, It.Z],
                    inject: ["$modal", "$notify", "parseError", "$platform"],
                    props: {
                        error: {
                            type: String,
                            default: null
                        },
                        amountDefault: {
                            type: [String, Number],
                            default: ""
                        },
                        currencyDefault: {
                            type: String,
                            default: null,
                            validator: ft.HN
                        },
                        paymentDefaultAbbreviation: {
                            type: String,
                            default: null
                        },
                        defaultCardType: {
                            type: String,
                            default: null
                        },
                        defaultTitle: {
                            type: String,
                            default: null
                        },
                        subtitle: {
                            type: String,
                            default: null
                        },
                        defaultDepositButtonText: {
                            type: String,
                            default: null
                        },
                        additionalCurrencyBonuses: {
                            type: Array,
                            default: null
                        }
                    },
                    emits: ["close"],
                    setup(t) {
                        const {
                            track: e
                        } = (0, kt.j6)(), n = (0, p.oR)(), o = (0, i.Fl)((() => t.currencyDefault || n.getters.currency)), s = (0, bt.Kq)(void 0, o, {
                            minimumFractionDigits: 0
                        });
                        return gn(yn({}, It.Z.setup()), {
                            bonusStore: (0, Bt.gD)(),
                            track: e,
                            store: n,
                            currentCurrency: o,
                            amountFormatter: s
                        })
                    },
                    data: () => ({
                        expireDateMonth: null,
                        expireDateYear: null,
                        isBankCardFieldsValid: !1,
                        additionalDataPlaceholder: "",
                        offline: !1,
                        instructions: null,
                        fetching: !1,
                        depositId: void 0,
                        lastInitialFieldsData: {},
                        showInstruction: !1,
                        customTitle: null,
                        customPageItem: null,
                        customPageButtonLink: null,
                        customPageData: null,
                        redirectUrl: null,
                        apiResponse: null,
                        modalIsLoaded: !1,
                        isFetchingPayments: !1,
                        newWindow: null,
                        paymentMethodsWithoutBonuses: ["yamoney_h2h", "webmoney_usd", "yamoney_rub"],
                        isAmountChanged: !1
                    }),
                    computed: gn(yn(yn({}, (0, p.Se)(["user", "langCommon", "lang", "currentLang", "lastDeposits", "isBlockable", "localeFormat"])), (0, p.rn)("detailing", ["deposits"])), {
                        additionalTitle() {
                            return `ID ${this.user.id}`
                        },
                        buttonEnabled() {
                            const {
                                min: t = 0,
                                max: e = 0
                            } = this.amountRules || {};
                            return (!this.showWallet || "" !== this.wallet) && !this.fetching && t <= +this.amount && e >= +this.amount && this.isRequiredFieldsValid && this.isBankCardValid && (!this.isNewBonusBalance || this.depositBonusValid) && this.getAmountFieldDescription.success
                        },
                        text() {
                            return gn(yn({}, this.lang.deposit.modal), {
                                profile: this.lang.header["user-box"].profile
                            })
                        },
                        isNewBonusBalance() {
                            return this.bonusStore.isNewBonusBalance
                        },
                        headerHint() {
                            const {
                                min: t = 0,
                                max: e = 0
                            } = this.amountRules;
                            return (0, J.Uw)(this.text.extraHeader, this.amountFormatter.format(this.isNewBonusBalance ? this.depositMin : t), this.amountFormatter.format(e))
                        },
                        paymentWalletInputProperties() {
                            var t;
                            return (0, Tt.UF)(null == (t = this.paymentMethod) ? void 0 : t.tag)
                        },
                        title() {
                            var t, e;
                            return null != (e = null != (t = this.customTitle) ? t : this.defaultTitle) ? e : this.text.title
                        },
                        showForm() {
                            return !this.offline && (!this.showBankCardPayments || this.showBankCardPayments && this.paymentMethod)
                        },
                        limitDepositText() {
                            return [this.isNewBonusBalance ? this.depositMin : this.amountRules.min, this.amountRules.max].map((t => this.amountFormatter.format(t))).join(" - ")
                        },
                        greyTheme() {
                            var t;
                            return (null == (t = this.paymentMethod) ? void 0 : t.cardViewType) === Q.neF.PIX
                        },
                        sanitizeInstructions() {
                            return c().sanitize(this.defaultInstructions, {
                                ADD_ATTR: ["target"]
                            })
                        },
                        isActiveWithdrawals() {
                            return this.withdrawalCancellationStore.withdrawalHistoryData.length > 0
                        },
                        isDepositWithdrawalManagementModalOpened() {
                            return this.$store.state.modal.queue.includes(Ae.cj)
                        },
                        shouldOpenDepositWithdrawalManagementModal() {
                            return this.isActiveWithdrawals && !this.isDepositWithdrawalManagementModalOpened && this.withdrawalReturnGroup === Q.nNg.GROUP_B
                        },
                        defaultInstructions() {
                            return this.instructions ? this.instructions[this.currentLang] || this.instructions.en : null
                        },
                        isHostToHost() {
                            return this.instructions && !this.instructions.mobileData && !this.defaultInstructions
                        },
                        sanitizedAnnotationText() {
                            return c().sanitize(this.annotation.text, {
                                ADD_ATTR: ["target"]
                            })
                        }
                    }),
                    watch: {
                        isActiveWithdrawals() {
                            this.shouldOpenDepositWithdrawalManagementModal && this.openDepositWithdrawalManagementModal()
                        },
                        amount() {
                            this.checkAmountError()
                        },
                        [`requiredFieldsData.${At.p}`]: "setAmount",
                        country: "load",
                        "requiredFieldsData.documentType": "handleChangingDocumentType"
                    },
                    created() {
                        this.withdrawalReturnGroup === Q.nNg.GROUP_B && this.withdrawalCancellationStore.getHistory()
                    },
                    mounted() {
                        return Cn(this, null, (function*() {
                            yield this.load(), this.modalIsLoaded && this.track(Ae.bZ)
                        }))
                    },
                    methods: {
                        load() {
                            return Cn(this, null, (function*() {
                                var t, e, n;
                                try {
                                    this.userDataPaymentSnippet = null, this.isFetchingPayments = !0, yield this.fetchInitialDepositData(), this.loadDepositsHistory(), this.isFetchingPayments = !1;
                                    const e = null != (t = this.cards[0]) ? t : null;
                                    (null == e ? void 0 : e.payments) ? this.onCardSelect(e): (yield this.onPaymentSelect(e, {
                                        resetCard: !0
                                    }), this.hasAmountDropdownField || this.setAmount(this.amountDefault || this.$route.params.amountDefault), this.setPlaceholder(e)), this.modalIsLoaded = !0
                                } catch (i) {
                                    0,
                                    console.error(i.message)
                                }
                                this.$googleTagManager.setUserProperties({
                                    currency: this.currentCurrency.toLowerCase(),
                                    payment_region: null == (n = null != (e = this.country) ? e : this.$store.state.country) ? void 0 : n.toLowerCase()
                                })
                            }))
                        },
                        openDepositWithdrawalManagementModal() {
                            this.$modal.openOver(Ae.cj, {
                                closeOnBackgroundClick: !0
                            })
                        },
                        onRedirectButtonClick() {
                            this.handleEvent({
                                event_name: "to_confirm",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                submit_amount: this.amount || 0,
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto")
                            }), window.open(this.redirectUrl, "_blank"), this.redirectUrl = null, this.$router.push(this.returnUrl())
                        },
                        onWalletInput(t) {
                            this.cardNumberField.events["update:modelValue"](t), this.setNeedValidateCardNumber(this.paymentMethod.requisites !== t)
                        },
                        openModalIfSelectMethodWithoutBonus(t = (t => null == (t = this.paymentMethod) ? void 0 : t.name)()) {
                            this.paymentMethodsWithoutBonuses.includes(t) && this.isActivatedBonus && this.$modal.openOver(Ae.Fc, {
                                listeners: {
                                    removeBonus: () => {
                                        this.bonusStore.setDepositBonusId(void 0), this.$modal.close()
                                    },
                                    changeMethod: () => {
                                        this.paymentMethod = null, this.$modal.close()
                                    }
                                },
                                props: {
                                    type: "paymentError"
                                },
                                closeOnBackgroundClick: !1
                            })
                        },
                        showError(t) {
                            return Cn(this, null, (function*() {
                                yield this.$notify.error(t)
                            }))
                        },
                        onCardSelect(t) {
                            this.card = t, this.onPaymentSelect(null)
                        },
                        resetCardFields() {
                            this.card = null, this.expireDateMonth = "", this.expireDateYear = ""
                        },
                        onPaymentSelect(t) {
                            return Cn(this, arguments, (function*(t, {
                                resetCard: e
                            } = {
                                resetCard: !1
                            }) {
                                var n, i;
                                this.openModalIfSelectMethodWithoutBonus(null == t ? void 0 : t.name), this.paymentMethod = t;
                                const o = null == (n = this.paymentMethod) ? void 0 : n.prefilledAmount;
                                o || this.showPaymentsGroup || (yield this.fetchUserDataPaymentSnippet()), e && this.resetCardFields(), this.lastInitialFieldsData = {}, this.showInstruction = !1, this.redirectUrl = null, this.paymentInfo = void 0, this.ruleId = void 0, this.isRedirectRequired = !1, this.setRequiredFields(this.initialFields), this.clearInstructions(), this.setPlaceholder(t), this.setIsTriggeredAmount(!1), (null == t ? void 0 : t.cardViewType) === Q.neF.CARD && this.onFieldChange(this.cardNumberField.field, null != (i = t.requisites) ? i : ""), this.setNeedValidateCardNumber(!(null == t ? void 0 : t.requisites)), this.showBanksGroup = !1
                            }))
                        },
                        setPlaceholder(t) {
                            if (!t) return;
                            const {
                                currency: e,
                                placeholder_text: n = {}
                            } = t;
                            if (this.additionalDataPlaceholder = n[this.currentLang], !this.hasAmountDropdownField) {
                                const {
                                    min: t = 0,
                                    max: e = 0
                                } = this.amountRules, n = (0, St.B)(this.amount, t, e);
                                if (this.promoCashierStore.promoCashierVisible && this.promoCashierStore.promoCashierClicked && this.promoCashierStore.promoCashier.promo.minAmount < e) this.setAmount(Math.max(this.promoCashierStore.promoCashier.promo.minAmount, t));
                                else if (this.amount && this.isTriggeredAmount) this.setAmount(n);
                                else {
                                    const n = this.isPredefineDepositValue && (0, St.B)(300, t, e);
                                    this.setAmount(n || this.paymentAmountSnippet)
                                }
                            }
                            const i = this.lastDeposits.find((({
                                payment_system: e
                            }) => e === t.value));
                            if (t.requisites) this.wallet = t.requisites;
                            else if (e.includes(this.currentCurrency) && !i) this.wallet = "";
                            else if ("pix_new" === i.payment_system && i.wallet) {
                                const t = JSON.parse(i.wallet);
                                this.requiredFieldsData.pixKey = t.pixKey, this.requiredFieldsData.numberId = t.numberId, this.requiredFieldsData.firstName = t.firstName, this.requiredFieldsData.secondName = t.secondName
                            } else this.wallet = i.wallet
                        },
                        clearInstructions() {
                            this.offline = !1, this.instructions = null, this.depositId = void 0, this.showBanksGroup = !1, this.selectedDropdownField = void 0, this.unifiedFlowData = void 0, this.isUnifiedFlow = !1, this.clearCustomPageData()
                        },
                        clearCustomPageData() {
                            this.customPageItem = null, this.customPageData = null, this.customPageButtonLink = null
                        },
                        createDeposit() {
                            return Cn(this, arguments, (function*(t = {}) {
                                var e, n, i, o, s, a;
                                if (null == (e = $t.appConfig.modules.payments) ? void 0 : e.depositDisabled) return void this.$modal.openOver(Ae.y2, {
                                    closeOnBackgroundClick: !1
                                });
                                if (this.fetching) return;
                                if (this.paymentMethod.cardViewType === Q.neF.NO_FIELDS_REDIRECT) return void this.noFieldsRedirect(this.paymentMethod.name);
                                if (!this.showBanksGroup && this.isMethodsModifiedDropdown) return void this.onNextStep();
                                if (this.isActivatedBonus && (this.needShowBonusPaymentError || this.needShowBonusLimitError)) return void this.$modal.openOver(Ae.Fc, {
                                    listeners: {
                                        removeBonus: () => {
                                            this.bonusStore.setDepositBonusId(void 0), this.$modal.close()
                                        },
                                        changeMethod: () => {
                                            this.$modal.close()
                                        }
                                    },
                                    props: {
                                        type: this.needShowBonusPaymentError ? "paymentError" : "limitError"
                                    }
                                });
                                const r = Number(this.amount),
                                    l = this.wallet.replace(/\s/g, ""),
                                    {
                                        min: u = 0,
                                        max: d = 0
                                    } = this.amountRules;
                                if (u > r || d < r) return void this.showError(this.parseError({
                                    messageLangKey: "error.sum_breaks_limits"
                                }));
                                this.lastInitialFieldsData = yn({}, this.requiredFieldsData), this.isMethodAmountNeedPattern && (this.requiredFieldsData.amount = r);
                                const c = gn(yn(yn(yn(yn({
                                    amount: r,
                                    currency: this.currentCurrency,
                                    paymentType: this.paymentMethod.value,
                                    wallet: this.showWallet ? l : void 0,
                                    returnUrl: this.returnUrl(),
                                    fields: this.requiredFieldsData,
                                    depositId: this.depositId,
                                    isActivatedBonus: this.isActivatedBonus,
                                    sessionId: this.threatMetrixSessionId,
                                    paymentVersion: this.store.getters.depositBankingVersion,
                                    selectedCountry: null != (n = this.country) ? n : this.$store.state.country
                                }, this.canPreRoute ? {
                                    paymentInfo: this.paymentInfo,
                                    ruleId: this.ruleId
                                } : void 0), this.isActivatedBonus ? {
                                    bonusId: this.bonusStore.depositBonusId
                                } : void 0), this.paymentSessionId ? {
                                    paymentSessionId: this.paymentSessionId
                                } : void 0), t), {
                                    abTestGroup: yn({}, this.astropayGroup ? {
                                        [this.experimentAstropay]: this.astropayGroup
                                    } : void 0)
                                });
                                try {
                                    this.fetching = !0, this.isRedirectRequired && (this.newWindow = window.open("", "_blank"));
                                    const {
                                        apiResponse: t,
                                        fields: e,
                                        depositId: n,
                                        depositUuid: s
                                    } = yield this.$store.dispatch("createDeposit", c);
                                    if (this.showBanksGroup = !1, this.depositId = t.depositId, this.hideDepositRetention(), this.receipt && s && n && (yield this.sendUploadedFile(s, n, this.receipt)), this.isCurrentPaymentCrypto && this.changeApiResponse(t.data), null == (i = null == t ? void 0 : t.data) ? void 0 : i.unifiedFlow) this.isUnifiedFlow = !0, this.unifiedFlowData = t.data, this.isAmountChanged = Number(this.amount) !== Number(this.unifiedFlowData.processingAmount) || this.currentCurrency !== this.unifiedFlowData.processingCurrency, this.depositId = n, this.offline = !0;
                                    else if (t.method === vt.N.CUSTOM_PAGE && vt.Mr.includes(t.pageId)) this.customPageItem = vt.Mr.getById(t.pageId), this.customPageButtonLink = t.buttonLink, this.customPageData = yn(yn({}, t.data), t.pageId === vt.RZ && {
                                        amount: this.amount,
                                        currency: this.currentCurrency,
                                        paymentSystem: this.paymentMethod.value
                                    });
                                    else if (t.isFieldsRequired) this.newWindow && this.newWindow.close(), this.setRequiredFields([...this.initialFields, ...e]);
                                    else if (t.method === vt.N.OFFLINE) this.instructions = this.isBankTransfer ? this.generateBankTransferInstruction(t) : t.data, this.offline = !0, this.depositId = n;
                                    else if ("object" === typeof t) {
                                        if (t.data.network) return void this.$refs.depositPaymentsGroup.onSuccessDeposit();
                                        if (this.isCurrentPaymentCrypto || "crypto" === (null == (o = this.paymentMethod) ? void 0 : o.category) || t.targetBlank) {
                                            if (this.redirectUrl = (0, Mt.X)(t), !this.newWindow) return;
                                            this.newWindow.document.location = this.redirectUrl, this.redirectUrl = null
                                        } else this.newWindow && this.newWindow.close(), yield(0, Mt.Z)(t)
                                    }
                                    this.showDepositMerchantIndia && this.$refs.depositMerchantIndia && this.$refs.depositMerchantIndia.onSuccessDeposit(), this.showDepositMerchantIndia && this.$refs.depositPaymentsGroup && (this.offline = !1, this.$refs.depositPaymentsGroup.onSuccessDeposit())
                                } catch (p) {
                                    if (this.newWindow && this.newWindow.close(), null == (s = null == p ? void 0 : p.data) ? void 0 : s.code) {
                                        const t = "banking.wrongAmount" === p.data.code,
                                            e = "banking.paymentMethodRegex" === p.data.code,
                                            n = "banking.merchantClientError" === p.data.code,
                                            i = this.parseError(p);
                                        let o = (0, Ot.d)(i) || "";
                                        if (this.$googleTagManager.handleDepositModalEvent({
                                                event_name: "create_error",
                                                error_description: o
                                            }), n) return void this.$modal.openOver(Ae.ug, {
                                            listeners: {
                                                retry: () => {
                                                    this.isCurrentPaymentCrypto || this.onPaymentSelect(this.paymentMethod)
                                                }
                                            },
                                            props: {
                                                message: o
                                            }
                                        });
                                        if (o.length > 60 && (this.$notify.error(i), o = `${o.slice(0,60)}...`), e && (null == (a = this.paymentMethod) ? void 0 : a.cardViewType) === Q.neF.PIX) return void this.$modal.openOver(Ae.VX, {
                                            listeners: {
                                                retry: () => {
                                                    this.onPaymentSelect(this.paymentMethod)
                                                }
                                            }
                                        });
                                        if (e) return void this.$modal.openOver(Ae.zj, {
                                            listeners: {
                                                retry: () => {
                                                    this.isCurrentPaymentCrypto || this.onPaymentSelect(this.paymentMethod, {
                                                        resetCard: !0
                                                    })
                                                }
                                            }
                                        });
                                        if (this.showWallet) return void this.addCustomMessage(p.data.code === t ? "amountError" : "walletError", {
                                            text: o,
                                            actionText: t ? this.langCommon.VInputCustomMessage.depositUseMaxAmount : this.langCommon.VInputCustomMessage.depositWalletTryAgain,
                                            closeable: !0,
                                            actionName: t ? "useMax" : "reEnter"
                                        })
                                    }
                                    this.$notify.error(this.langCommon.notify.errorDepositCreated)
                                } finally {
                                    this.newWindow = null, this.fetching = !1
                                }
                            }))
                        },
                        changeApiResponse(t) {
                            this.apiResponse = t
                        },
                        back() {
                            this.$router.push({
                                name: "profile"
                            })
                        },
                        setAmount(t) {
                            this.amount = t || ""
                        },
                        getStaticEventParams() {
                            var t, e, n;
                            return yn({
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto"),
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod)
                            }, {
                                free_spin_visible: this.promoCashierStore.promoCashierVisible,
                                free_spin_checked: null != (n = null == (e = null == (t = this.promoCashierStore.promoCashier) ? void 0 : t.nomination) ? void 0 : e.isActive) && n
                            })
                        },
                        handleAmount(t, e) {
                            const n = yn({
                                event_name: "input_field",
                                field_name: "amount_field"
                            }, this.getStaticEventParams());
                            this.setAmount(t), this.handleInputAmount(t, e, (() => this.handleEvent(n)))
                        },
                        updateTitle(t) {
                            this.customTitle = t
                        },
                        handleChangingDocumentType(t) {
                            "ND" === t && this.onFieldChange("documentId", "")
                        },
                        changeCard(t) {
                            this.onPaymentSelect(t), this.clickOnCardType(t)
                        },
                        clickOnAmountTag(t) {
                            this.setAmount(t), this.paymentSessionId || this.startPaymentSession(), this.handleEvent({
                                event_name: "predefined_amount",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                predefined_amount: t
                            })
                        },
                        openDetailingModal() {
                            this.$modal.openOver(Ae.pg), this.clickOnDetailingButton()
                        },
                        clickOnDetailingButton() {
                            this.handleEvent({
                                event_name: "detailing",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method")
                            })
                        },
                        clickOnSubmitButton() {
                            var t, e, n;
                            this.handleEvent(yn({
                                event_name: "submit",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                submit_amount: this.amount || 0,
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto")
                            }, {
                                free_spin_visible: this.promoCashierStore.promoCashierVisible,
                                free_spin_checked: null != (n = null == (e = null == (t = this.promoCashierStore.promoCashier) ? void 0 : t.nomination) ? void 0 : e.isActive) && n
                            }))
                        },
                        clickOnRegionOpenButton() {
                            this.handleEvent({
                                event_name: "change_payment_region",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto")
                            })
                        },
                        clickOnRegionChangeButton(t) {
                            this.handleEvent({
                                event_name: "new_payment_region",
                                payment_region: t,
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto")
                            })
                        },
                        clickOnPaymentMethod(t) {
                            this.modalIsLoaded && this.handleFormView(t)
                        },
                        clickOnCardType(t) {
                            this.handleEvent({
                                event_name: "card_type",
                                deposit_method: (0, Pt.lO)(this.card, t),
                                card_type: (0, Pt.nO)(t, "card_method")
                            })
                        },
                        clickOnCryptoType(t) {
                            this.handleEvent({
                                event_name: "crypto_method",
                                deposit_method: (0, Pt.lO)(this.card, t),
                                crypto_method: (0, Pt.nO)(t, "crypto")
                            })
                        },
                        closeModal() {
                            return Cn(this, null, (function*() {
                                if (!this.isDepositRetentionHidden && !this.hasDepositHistory && (yield this.shouldOpenDepositRetentionPromise) && this.isUserInRetentionExperiment) return this.$modal.openOver(Ae.Xy, {
                                    closeOnBackgroundClick: !1
                                }), void this.hideDepositRetention();
                                this.$googleTagManager.handleDepositModalEvent({
                                    event_name: "back"
                                }), this.bonusStore.isNewBonusBalance && (this.bonusStore.setDepositBonusId(void 0), this.bonusStore.setAdditionalCurrencyBonuses(void 0)), this.$emit("close")
                            }))
                        },
                        handleCustomMessageAction(t) {
                            "useMax" === t && this.handleEvent({
                                event_name: "max_amount",
                                deposit_method: (0, Pt.lO)(this.card, this.paymentMethod),
                                submit_amount: this.amount || 0,
                                card_type: (0, Pt.nO)(this.paymentMethod, "card_method"),
                                crypto_method: (0, Pt.nO)(this.paymentMethod, "crypto")
                            }), this.onCustomMessageAction(t)
                        },
                        handlePaySubmit(t) {
                            var e, n, i;
                            this.handleEvent(yn(yn({}, wt.G[t]), {
                                free_spin_visible: this.promoCashierStore.promoCashierVisible,
                                free_spin_checked: null != (i = null == (n = null == (e = this.promoCashierStore.promoCashier) ? void 0 : e.nomination) ? void 0 : n.isActive) && i
                            }))
                        },
                        handleDynamicField(t, e) {
                            var n, i;
                            if (!t) return;
                            const o = "dropdown" === e.type;
                            o && this.isMethodsModifiedDropdown && (this.selectedDropdownField = t);
                            const s = yn(yn({
                                event_name: o ? "select_field" : "input_field",
                                field_name: null != (i = null == (n = e.props) ? void 0 : n.placeholder) ? i : null
                            }, o && {
                                field_value: t
                            }), this.getStaticEventParams());
                            this.handleEvent(s)
                        },
                        handleNotificationEvent(t) {
                            this.$googleTagManager.sendNotificationEvent("view", {
                                deposit_method: this.paymentMethod.value,
                                notification_place: "deposit_form",
                                notification_title: t.notification_title
                            })
                        },
                        handleFileUpload(t) {
                            this.receipt = t
                        },
                        handleEvent(t) {
                            var e, n;
                            t && this.$googleTagManager.handleDepositModalEvent(yn({
                                currency: this.currentCurrency.toLowerCase(),
                                payment_region: null == (n = null != (e = this.country) ? e : this.$store.state.country) ? void 0 : n.toLowerCase()
                            }, t))
                        }
                    },
                    CARD_VIEW: Q.neF,
                    depositEventParams: wt.G
                },
                Dn = {
                    annotation: "DepositModal_annotation_Yiu7W",
                    redirectButtonWrapper: "DepositModal_redirectButtonWrapper_lwa4o",
                    redirectButtonCaption: "DepositModal_redirectButtonCaption_oTKIC",
                    headerHint: "DepositModal_headerHint_u_Io_",
                    cardTypeSelect: "DepositModal_cardTypeSelect_HKyP4",
                    form: "DepositModal_form_Pyuau",
                    formDefault: "DepositModal_formDefault_y3jtZ",
                    limitDeposit: "DepositModal_limitDeposit_LMIj5",
                    instructionButton: "DepositModal_instructionButton_n2Hbd",
                    sendButton: "DepositModal_sendButton_k1BfK",
                    copyright: "DepositModal_copyright_idA2_",
                    detailingButton: "DepositModal_detailingButton_q_0c9",
                    instruction: "DepositModal_instruction_dp4YU",
                    loader: "DepositModal_loader_AsjW0",
                    resetRequiredDataButton: "DepositModal_resetRequiredDataButton_l49bT",
                    banksGroup: "DepositModal_banksGroup_GFWoE",
                    buttonsBanksGroup: "DepositModal_buttonsBanksGroup_Ub9W3",
                    buttonBanksGroup: "DepositModal_buttonBanksGroup_h_P89",
                    backButton: "DepositModal_backButton_N5Nmr",
                    backButtonIcon: "DepositModal_backButtonIcon_PrRGc",
                    promoBannerIPL: "DepositModal_promoBannerIPL_q3ZyT",
                    inputAmount: "DepositModal_inputAmount_jGj1l"
                },
                fn = {};
            fn["$style"] = Dn;
            const vn = (0, T.Z)(_n, [
                    ["render", u],
                    ["__cssModules", fn]
                ]),
                wn = vn
        },
        312739: (t, e, n) => {
            n.d(e, {
                Z: () => r
            });
            var i = n(40783),
                o = n(51919),
                s = n(348118);
            const a = (0, s.Z)(o.Z, [
                    ["render", i.s]
                ]),
                r = a
        },
        51919: (t, e, n) => {
            n.d(e, {
                Z: () => i.Z
            });
            var i = n(607987)
        },
        40783: (t, e, n) => {
            n.d(e, {
                s: () => i.s
            });
            var i = n(943263)
        },
        607987: (t, e, n) => {
            n.d(e, {
                Z: () => i
            });
            const i = {
                props: {
                    value: {
                        type: [String, Object],
                        default: null
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    required: {
                        default: !1,
                        type: Boolean
                    },
                    placeholder: {
                        type: String,
                        default: null
                    },
                    labelKey: {
                        type: String,
                        default: "label"
                    },
                    valueKey: {
                        type: String,
                        default: "value"
                    },
                    items: {
                        type: Array,
                        required: !0
                    }
                },
                emits: ["input"],
                computed: {
                    currentValue() {
                        const t = this.value;
                        return null === t || "string" === typeof t ? t : t[this.valueKey]
                    },
                    options() {
                        return "string" === typeof this.items[0] ? this.items.map((t => ({
                            value: t.toString(),
                            label: t.toString()
                        }))) : this.items.map((t => ({
                            value: t[this.valueKey].toString(),
                            label: t[this.labelKey].toString()
                        })))
                    }
                },
                methods: {
                    onSelect(t) {
                        const e = this.options.findIndex((e => e.value === t.target.value));
                        this.$emit("input", this.items[e])
                    }
                }
            }
        },
        943263: (t, e, n) => {
            n.d(e, {
                s: () => l
            });
            var i = n(166252),
                o = n(3577);
            const s = ["disabled", "value", "required"],
                a = {
                    key: 0,
                    value: "",
                    disabled: "",
                    selected: ""
                },
                r = ["value"];

            function l(t, e, n, l, u, d) {
                return (0, i.wg)(), (0, i.iD)("select", {
                    class: "v-select-native",
                    disabled: n.disabled,
                    value: d.currentValue,
                    required: n.required,
                    onInput: e[0] || (e[0] = (...t) => d.onSelect && d.onSelect(...t))
                }, [n.placeholder ? ((0, i.wg)(), (0, i.iD)("option", a, (0, o.zw)(n.placeholder), 1)) : (0, i.kq)("", !0), ((0, i.wg)(!0), (0, i.iD)(i.HY, null, (0, i.Ko)(d.options, ((t, e) => ((0, i.wg)(), (0, i.iD)("option", {
                    key: e,
                    class: "option",
                    value: t.value
                }, (0, o.zw)(t.label), 9, r)))), 128))], 40, s)
            }
        }
    }
]);