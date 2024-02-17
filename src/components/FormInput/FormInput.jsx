import './FormInput.css'
import countryCodes from '../../assets/CountryCodes.json'

function FormInput() {

    const validateNumInput = (event) => {
        const keyCode = event.keyCode || event.which
        if (keyCode < 48 || keyCode > 57) {
            event.preventDefault()
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const api = "https://wa.me/"
        const form = new FormData(event.currentTarget)
        const body = {}
        for (const [key, value] of form.entries()) {
            body[key] = value;
        }
        window.open(api + body.countryCode + body.number)
    }
    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="title">Input Number Phone</div>
                    <div className="body">
                        <div className="input-number">
                            <select name="countryCode">
                                {countryCodes.map((code, index) => (
                                    <option key={index} value={code.dial_code}>
                                        {code.name} (+{code.dial_code})
                                    </option>
                                ))}
                            </select>
                            <input type="number" id="number" name="number"
                                   onKeyPress={validateNumInput} min="0"
                                   placeholder="Enter phone number" />
                        </div>
                        <div className="input-message">
                            <input type="text" name="message" placeholder="Message (optional)" />
                        </div>
                        <div className="input-submit">
                            <button>Send Message</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default FormInput;