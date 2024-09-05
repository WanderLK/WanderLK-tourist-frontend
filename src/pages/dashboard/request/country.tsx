import Form from '@/components/form';
import SubmitButton from '@/components/form/button';
import FormEditor from '@/components/form/editor';
import CountryDetails, {
    countryInitialValues,
    countryValidationSchema
} from '@/components/visa/country';
import { feedbackValidationSchema } from '@/components/visa/data';
import { FormikValues } from 'formik';
import { useMemo } from 'react';

export default function RequestCountry() {
    const initialValues = useMemo(() => {
        const template = countryInitialValues;

        return template;
    }, []);

    const onSubmit = async (values: FormikValues) => {};

    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-3xl">Country Details</h1>

            <Form
                validationSchema={countryValidationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-full">
                <CountryDetails />

                <SubmitButton className="self-end" theme="dashboard">
                    Approve
                </SubmitButton>
            </Form>

            <Form
                validationSchema={feedbackValidationSchema}
                initialValues={{ feedback: '' }}
                onSubmit={onSubmit}
                className="flex flex-col gap-4 w-full">
                <div className="min-h-44">
                    <FormEditor name="feedback" />
                </div>

                <SubmitButton className="self-end py-5" theme="dashboard">
                    Send to Correct
                </SubmitButton>
            </Form>
        </div>
    );
}
