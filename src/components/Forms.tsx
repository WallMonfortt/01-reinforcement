import { useForm } from '../hooks/useForm';

const Forms = () => {

    const { form, email, password, onChange  } = useForm(
        {
            email: 'test@mail.com',
            password: '123456'
        }
    );

  return (
    <>
      <h3>Forms</h3>
      <input 
        type="text"
        className="form-control"
        placeholder="mail"
        value={email}
        onChange={({target}) => onChange(target.value, 'email')}
        />
        <input
            type="text"
            className="form-control mt-2 mb-2"
            placeholder="password"
            value={password}
            onChange={({target}) => onChange(target.value, 'password')}
        />

        <code>
            <pre>
                {JSON.stringify(form, null, 2)}
            </pre>
        </code>
    </>
  )
}

export default Forms
