import { Form, Input } from "antd";
import { useContext } from "react";
import { userContext } from "../App";

const SkillsForm = () => {
    
    const {useForm} = Form;
    const [form] = useForm();

    const { userDetails, setUserDetails } = useContext(userContext);
    
    return <div>
        <Form
            form={form}
            layout="vertical"
            onFinish={(values) => console.log(values)}
        >
            <Form.Item
                name='languages'
                label={<label className="text-gray-500 text-[16px]">Add Languages</label>}
            >
                <Input 
                    placeholder="eg. JavaScript, Typescript, ..." 
                    onChange={(e) => setUserDetails({
                        ...userDetails,
                        'skillset': {
                            ...userDetails.skillset,
                            'languages': e.target.value
                        }
                    })}    
                />
            </Form.Item>

            <Form.Item
                name='libraries'
                label={<label className="text-gray-500 text-[16px]">Add Libraries/Frameworks</label>}
            >
                <Input 
                    placeholder="eg. ReactJS, jQuery, ..." 
                    onChange={(e) => setUserDetails({
                        ...userDetails,
                        'skillset': {
                            ...userDetails.skillset,
                            'libraries': e.target.value
                        }
                    })}    
                />
            </Form.Item>

            <Form.Item
                name='tools'
                label={<label className="text-gray-500 text-[16px]">Add Tools/Platforms</label>}
            >
                <Input 
                    placeholder="eg. Git, Postman, ..." 
                    onChange={(e) => setUserDetails({
                        ...userDetails,
                        'skillset': {
                            ...userDetails.skillset,
                            'tools': e.target.value
                        }
                    })}
                />
            </Form.Item>

            <Form.Item
                name='databases'
                label={<label className="text-gray-500 text-[16px]">Add Databases/Clouds</label>}
            >
                <Input 
                    placeholder="eg. MongoDB, Firebase, ..." 
                    onChange={(e) => setUserDetails({
                        ...userDetails,
                        'skillset': {
                            ...userDetails.skillset,
                            'databases': e.target.value
                        }
                    })}    
                />
            </Form.Item>

        </Form>
    </div>
}

export default SkillsForm;