import { Form, Input, Space, Button } from 'antd'
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { useContext } from 'react';
import { userContext } from '../App';

const ProjectForm = () => {

    const {useForm} = Form;
    const [form] = useForm();
    const { userDetails, setUserDetails } = useContext(userContext);

    const onFinish = (values) => {
        console.log(values);
    }

    let addFunction = () => {};
    let removeFunction = (name) => {};
    
    const addField = () => {
        setUserDetails({
            ...userDetails,
            'projects': [
                ...userDetails.projects,
                {
                    'title': '',
                    'technologyUsed': '',
                    'link': '',
                    'description': ''
                }
            ]
        })
        addFunction();
    }

    const removeField = (key, name) => {
        setUserDetails({
            ...userDetails,
            'projects': userDetails.projects.filter((project, i) => i != key)
        })
        removeFunction(name)
    }

    return <div>
         <Form
            form={form}
            layout='vertical'
            onFinish={onFinish}
        >
            <Form.List name="projects">
            {(fields, { add, remove }) => (
                <>{addFunction = add}
                {removeFunction = remove}
                {fields.map(({ key, name, ...restField }) => (
                    <Space
                        key={key}
                        style={{
                            display: 'flex',
                            marginBottom: 8,
                            flexDirection: 'column'
                        }}
                        align="baseline"
                    >
                    <DeleteOutlined onClick={() => removeField(key, name)} />

                    <div className='flex justify-between gap-2 w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'title']}
                            label={<label className='text-gray-500 text-[16px]'>Project Title</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg Resume Maker Application" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'projects': userDetails.projects.map((project, i) => i !== key ? project : {
                                        ...userDetails.projects[i],
                                        'title': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                        <Form.Item
                            {...restField}
                            name={[name, 'link']}
                            label={<label className='text-gray-500 text-[16px]'>Project Link</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg. www.project.vercel.app" 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'projects': userDetails.projects.map((project, i) => i !== key ? project : {
                                        ...userDetails.projects[i],
                                        'link': e.target.value
                                    } )
                                })} 
                            />
                        </Form.Item>
                    </div>

                    <div className='w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'technologyUsed']}
                            label={<label className='text-gray-500 text-[16px]'>Technology Used</label>}
                            className='w-full'
                        >
                            <Input 
                                placeholder="eg. ReactJS, NextJS, ..." 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'projects': userDetails.projects.map((project, i) => i !== key ? project : {
                                        ...userDetails.projects[i],
                                        'technologyUsed': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                    </div>

                    <div className='w-[400px]'>
                        <Form.Item
                            {...restField}
                            name={[name, 'description']}
                            label={<label className='text-gray-500 text-[16px]'>Description</label>}
                            className='w-full'
                            
                        >
                            <Input.TextArea 
                                showCount 
                                maxLength={300} 
                                rows={4} 
                                placeholder="Enter Description " 
                                onChange={(e) => setUserDetails({
                                    ...userDetails,
                                    'projects': userDetails.projects.map((project, i) => i !== key ? project : {
                                        ...userDetails.projects[i],
                                        'description': e.target.value
                                    } )
                                })}     
                            />
                        </Form.Item>
                    </div>

                    </Space>
                ))}
                <Form.Item>
                    <Button type="dashed" onClick={addField} block icon={<PlusOutlined />}>
                    Add field
                    </Button>
                </Form.Item>
                </>
            )}
            </Form.List>
        </Form>
    </div>
}

export default ProjectForm;