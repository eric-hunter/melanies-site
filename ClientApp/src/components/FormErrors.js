
export const FormErrors = ({ FormErrors }) =>
    <div className='form-errors'>
        {
            Object.keys(FormErrors).map((fieldName, i) => {
                return (
                    <p key={i}>{fieldName} {FormErrors[fieldName]}</p>
                )
            })
        }
    </div>

