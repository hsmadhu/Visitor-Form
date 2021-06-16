import React, { useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Persist } from 'formik-persist'

const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    date: new Date(),
};
  
  const onSubmit = (values) => { console.log('Form submit', values) };
//   const URL = /^((https?|ftp):\/\/)?(www.)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/
  
  const validationSchema = Yup.object({
        
    first_name: Yup.string().required('Required!').max(30, 'Must be 30 characters or less').min(4, 'Must be atlest 4 characters'),
    last_name: Yup.string().required('Required!').max(30, 'Must be 30 characters or less').min(4, 'Must be atlest 4 characters'),
    email: Yup.string().required('Required!').email('Invalid Email id'),
      
  })

function FormikExample() {
  const [entrytime, setEntryTime] = useState(null)
  const [date, setDate] = useState(null)
  var curr = new Date()
  var date1 = curr.toISOString().substr(0, 10)
     
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="form-control center bg-info">
              <div className="form-group w-50 mb-3" style= {{margin: "auto"}} >
                <label htmlFor="first_name">First name</label>
                <Field type="text" name="first_name" id="first_name" autoComplete="given-name" placeholder="First Name" className="form-control" />
                <ErrorMessage name='first_name'>
                            {(errMsg) => <div className="co">{errMsg}</div>}
                </ErrorMessage>
              </div>
              
                        
              <div className="form-group w-50 mb-3" style= {{margin: "auto"}}>
                <label htmlFor="last_name">Last name</label>
                <Field type="text" name="last_name" id="last_name" autoComplete="family-name" className="form-control"/>
                <ErrorMessage name='last_name' className="primary co">
                            {(errMsg) => <div className="co" >{errMsg}</div>}
                </ErrorMessage>
              </div>
              
                        
              <div className="form-group w-50 mb-3" style= {{margin: "auto"}}>
                <label htmlFor="email">Email address</label>
                <Field type="text" name="email" id="email" autoComplete="email" className="form-control"/>
                <ErrorMessage name='email'>
                            {(errMsg) => <div className="co">{errMsg}</div>}
                </ErrorMessage>
              </div>
          
              <div className="form-group w-50 mb-3" style= {{margin: "auto"}}>
                <label htmlFor="date">Date</label>
                <input type="datetime-local" defaultValue={date1} name="date" id="date" onChange={e => { setDate({ date: e.target.value }); console.log("date ... . ", e.target.value) }} autoComplete="date" className="form-control"/>
              </div>
              <div className="form-group w-50 mb-3" style= {{margin: "auto"}}>
                <label htmlFor="entrytime">Entry Time</label>
                <input type="time" name="entrytime" id="entrytime" onChange={e=>setEntryTime(e.target.value)} autoComplete="entrytime" className="form-control"/>
              </div>

          <div class="row g-4">
            <div class="col-md">
              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInputGrid" placeholder="name@example.com" value="mdo@example.com"/>
                <label for="floatingInputGrid" style= {{color:"black"}} >Email address</label>
              </div>
            </div>
            <div class="col-md">
              <div class="form-floating">
                <select class="form-select" id="floatingSelectGrid" aria-label="Floating label select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <label for="floatingSelectGrid" style={{color: "black"}}>Works with selects</label>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
             <button type="submit" className="btn btn-primary mt-4 m-auto">Submit</button>
          </div>
            <Persist name="signup-form" />
        </Form>
      </Formik>
    )
}

export default FormikExample
