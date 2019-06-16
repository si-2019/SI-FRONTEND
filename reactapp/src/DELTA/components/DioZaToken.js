/*
constructor(props) {
    super(props)
    const token = localStorage.getItem("token")

    let logiran = true
    if(token == null) {
      logiran = false
    }

    this.state = {
      korisnickoIme: '',
      sifra: '',
      logiran
    }
  }
  componentDidMount() {
    if(this.state.logiran == true) {
      return <Redirect to="/Delta" />
    }
    else{
        return <Redirect to="/Romeo" />
    }
  }
  */