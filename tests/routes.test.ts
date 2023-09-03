import request from 'supertest';
import { app } from '../src';

describe("Post endpoints", () => {
    test("Create new task", async () => {
        const res = await request(app)
        .post('/tasks')
        .send({
            title: 'Tests creation',
            description: 'Testing task creation'
        })
        .set('Accept', 'application/json')
        .expect(201);

        const postid = res.body.id;
        const res2 = await request(app)
            .get(`/tasks/${postid}`)
            .set('Accept', 'application/json')
            .expect(200)
        
        expect(res2.body).toHaveProperty('title');
        expect(res2.body.title).toBe('Tests creation');
        expect(res2.body).toHaveProperty('description');
        expect(res2.body.description).toBe('Testing task creation');
    });

    test("Try to add task without description",async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Tests'
            })
            .expect(400);

        expect(res.body).toBe('Title or description is null');
    });

    test("Try to add task without title", async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                description: 'Testing test'
            })
            .expect(400);

        expect(res.body).toBe('Title or description is null');
    });
})

describe("Get endpoints", () => {
    test("Get all tasks", async () => {
        const res = await request(app)
            .get('/tasks')
            .expect(200);
    });

    test("Fetch invalid item", async () => {
        const res = await request(app)
            .get("/tasks/486648")
            .expect(400);

        console.log(res.body);
        expect(res.body).toBe("ID not found");
    });
})

describe("Put endpoints", () => {
    test("Update task", async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Tests update',
                description: 'Testing task update'
            })
            .set('Accept', 'application/json')
            .expect(201);

        const postid = res.body.id;
        const res2 = await request(app)
            .put(`/tasks/${postid}`)
            .send({
                title: 'Tests update 2',
                description: 'Testing if this message was updated'
            })
            .set('Accept', 'application/json')
            .expect(200);
        
        expect(res2.body).toHaveProperty('title');
        expect(res2.body.title).toBe('Tests update 2');
        expect(res2.body).toHaveProperty('description');
        expect(res2.body.description)
            .toBe('Testing if this message was updated');
        expect(res2.body).toHaveProperty('finished_at');
        expect(res2.body.finished_at).toBeNull();

        const res3 = await request(app)
            .put(`/tasks/${postid}`)
            .send({
                finished_at: true
            })
            .set('Accept', 'application/json')
            .expect(200);

        expect(res3.body).toHaveProperty('finished_at');
        expect(res3.body.finished_at).not.toBeNull();
    });

    test("Update inexistent task", async () => {
        const res = await request(app)
        .get("/tasks/486648")
        .expect(400);

        console.log(res.body);
        expect(res.body).toBe("ID not found");
    })
})

describe("Delete endpoints", () => {
    test("Remove task", async () => {
        const res = await request(app)
            .post('/tasks')
            .send({
                title: 'Test removal',
                description: 'Testing task removal'
            })
            .set('Accept', 'application/json')
            .expect(201);

        const postid = res.body.id;
        const res2 = await request(app)
            .delete(`/tasks/${postid}`)
            .expect(204);
    });

    test("Delete invalid item", async () => {
        const res = await request(app)
            .get("/tasks/486648")
            .expect(400);

        console.log(res.body);
        expect(res.body).toBe("ID not found");
    });
})