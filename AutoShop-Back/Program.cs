using AutoShop.Models;
using AutoShop.Repositories;

var builder = WebApplication.CreateBuilder(args);

var policyName = "default";

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policyName,
        builder =>
        {
            builder.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
        });
});

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAuthorization(options=>
{
    options.FallbackPolicy = options.DefaultPolicy;
});

var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(policyName);


app.MapGet("/weatherforecast", () =>{  throw new Exception();}).WithName("GetWeatherForecast");

app.MapGet("/cars", async ()=>{ return await CarRepository.Read(); });
app.MapGet("/cars/{id}", async (int id) => {return await CarRepository.Read(id); });
app.MapPost("/cars", async (Car car) => {return await CarRepository.Create(car); });
app.MapPut("/cars", async (Car car) => {return await CarRepository.Update(car); });
app.MapDelete("/cars/{id}", async (int id) => { return await CarRepository.Delete(id); });

app.MapGet("/components", async () => {return await ComponentRepository.Read(); });
app.MapGet("/components/{id}", async (int id) => { return await ComponentRepository.Read(id); });
app.MapPost("/components", async (Component component) => {return await ComponentRepository.Create(component); });
app.MapPut("/components", async (Component component) => {return await ComponentRepository.Update(component); });
app.MapDelete("/components/{id}", async (int id) => {return await ComponentRepository.Delete(id); });

app.Run();

