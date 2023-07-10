

        import fondo from  './img.jpg'
        import './styls/styls.css'

        const Login = () => {
            return ( 
        <> 
        <form className="form-container" style={{backgroundImage:`url(${fondo})`
         }} 

        >
        <div className="logo-container"/>
            <div className="title-container">
                <h1 className="title">Login a your account</h1>
                <span className="subtitle">
                    get started whith our app, just create an account and enjoy the esperience.
                </span>
            </div>
        <br />
        <div className="input-container">
            <label className="input-label"  htmlFor="email-field">email</label>
        
        <input 
        
        placeholder="name@gmail.com"
        title="input title"
        name="input title"
            type="text"
            className="input-field"
            id="gmail-field" />
        </div>
        <div className="input-container">
            <label className="input-label"  htmlFor="passwordf-ield">password</label>
        <input 
        placeholder="password"
        title="input title"
        name="input title"
            type="text"
            className="input-field"
            id="password-field" />
        </div>

        <button title="Sign In" type="submit" className="sign-in-btn">
            <span>Sign In</span>
        </button>
        <div className="separator">
            <hr className="line" />
            <span className="or">Or</span>
            <hr className="line" />
        </div>
        <button title="Sign In" type="submit" className="sign-in-ggl">Sing In with Google</button>

        <button title="Sign In" type="submit" className="sign-in-apl"> <span>Sign In with Apple</span></button>
        <p className="note">Terms of use &amp; Conditions</p>
        </form>

        </>

     );
}
 
export default Login;