import { useRouter } from 'next/router'
import * as Yup from 'yup'
import P from '../../atom/CustomP/P'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import Input from '../../atom/customInput/Input'
import Button from '../../atom/customButton/Button'
import { FcGoogle } from 'react-icons/fc'
import { IoLogoFacebook } from 'react-icons/io'
import Link from 'next/link'
const signupSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid Email').required('Email is required'),
    password: Yup.string().min(6, 'At least 6 Character').required('Password is required')
})

interface FormValueType {
    name: string
    email: string
    password: string
}

function SignupForm() {
    const router = useRouter();
    const initialValues: FormValueType = {
        name: '',
        email: '',
        password: ''
    }
    const formHandler = (values: FormValueType) => {
        console.log(values);
        router.push('/')
    }
    return (
        <div className='w-full h-full flex flex-col items-center justify-between'>
            <P className='text-[20px] font-semibold'>Create Your Acount</P>
            <Formik initialValues={initialValues} onSubmit={formHandler} validationSchema={signupSchema}>
                <Form>
                    <div className='w-full h-auto flex flex-col justify-between gap-3'>
                        <Field as={Input} name='name' type='text' placeholder='Name' className={`w-100 h-10 rounded-2xl outline-none p-5 border-[#FBD5DD] border`} />
                        <ErrorMessage name='name' component={'P'} className='text-[12px] text-[red]' />
                        <Field as={Input} name='email' type='text' placeholder='Email' className={`w-100 h-10 rounded-2xl outline-none p-5 border-[#FBD5DD] border`} />
                        <ErrorMessage name='email' component={'P'} className='text-[12px] text-[red]' />
                        <Field as={Input} name='password' type='text' placeholder='Password' className={`w-100 h-10 rounded-2xl outline-none p-5 border-[#FBD5DD] border`} />
                        <ErrorMessage name='password' component={'P'} className='text-[12px] text-[red]' />
                        <Button type='submit' className='w-100 h-10 bg-[#FBD5DD] rounded-2xl cursor-pointer'>Create Account</Button>
                    </div>
                </Form>
            </Formik>
            <div className='w-100 h-10 flex items-center justify-between'>
                <div className='w-30 h-0.5 bg-[#FBD5DD]'></div>
                <P className='text-[14px]'>Or Sign Up With</P>
                <div className='w-30 h-0.5 bg-[#FBD5DD]'></div>
            </div>
            <div className='w-full h-20 flex items-center justify-between'>
                <div className='w-45 h-15 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex items-center justify-center gap-3 rounded-2xl'>
                    <FcGoogle className='text-[40px]' />
                    <P>Google</P>
                </div>
                <div className='w-45 h-15 bg-linear-to-l from-[#fdf4f6] to-[#FBD5DD] flex items-center justify-center gap-3 rounded-2xl'>
                    <IoLogoFacebook className='text-[40px] text-[blue]' />
                    <P>Facebook</P>
                </div>
            </div>
            <div className='w-full h-10 bg-green-400 flex items-center justify-center text-[14px] gap-3'>
                <P>Already have an account ?</P>
                <Link href={'/login'}>
                    <P className='text-[#FBD5DD]'>Sign In</P>
                </Link>
            </div>
        </div>
    );
}

export default SignupForm;